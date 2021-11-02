# Integration of internatinalization with PWA

- All required translation text will be in JSON file under i18n base folder
- Add text with its id as key ( see example below )
- Use text as required in component with react-intl third-party library

## example i18n json entry

```js
{
    "accountMenu.orderHistoryLink": "Order History",
    "autocomplete.resultSummary": "{resultCount} items",
    "component.greeting": "Hi, {name}"
}
```

## example usage with react-intl

```js
// import
import { FormattedMessage, useIntl } from 'react-intl';
// as a component
<FormattedMessage
    id="autocomplete.resultSummary"
    defaultMessage="{resultCount} items"
    values={{
        resultCount: 55
    }}
/>
// for plain text
const { formatMessage } = useIntl();

const text = formatMessage(
    { id: "component.greeting", defaultMessage: "Hi, {name}"},
    { name: currentUser.firstname }
);
```