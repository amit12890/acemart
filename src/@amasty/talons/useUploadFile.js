import { useState, useCallback } from 'react';
import { RestApi } from '@magento/peregrine';
const { request } = RestApi.Magento2;

import { HOST_URL } from "../../url.utils"

const UPLOAD_API = `${HOST_URL}/rest/all/V1/amasty_advanced_review/uploadImage`;
const MAX_SIZE = 7340032; // ~7mb


const getBase64 = file => {
  const reader = new FileReader();

  return new Promise(resolve => {
    reader.onload = ev => {
      const result = {
        fileContent: {
          base64_encoded_data: ev.target.result.replace(
            /^data:image\/[a-z]+;base64,/,
            ''
          ),
          name_with_extension: file.name
        }
      };

      resolve(result);
    };
    reader.readAsDataURL(file);
  }).catch(error => log(error));
};

export const useUpload = props => {
  const { setTmpImgPath, formApi } = props;
  const [loading, setLoading] = useState(false);

  const handleUpload = useCallback(
    async e => {
      const { files } = e.target;
      const promises = [];

      if (files) {
        setLoading(true);
        for (let i = 0; i < files.length; i++) {
          if (files[i].size < MAX_SIZE) {
            promises.push(
              getBase64(files[i]).then(({fileContent}) =>
                request(UPLOAD_API, {
                  method: 'POST',
                  body: JSON.stringify(fileContent)
                }).catch(error => console.log(error))
              )
            );
          }
        }

        const result = await Promise.all(promises);

        if (Array.isArray(result) && result.length) {
          const field = 'review_images';
          const { setError, setValue, validateField } = formApi || {};

          try {
            const paths = result.map(r => r.temporary_name);
            validateField(field);
            setTmpImgPath(paths);
          } catch (e) {
            setError(field, 'An error occurred while upload the image');
            setValue(field, null);
          }
        }

        setLoading(false);
      }
    },
    [setLoading, setTmpImgPath, formApi]
  );

  return {
    handleUpload,
    loading
  };
};
