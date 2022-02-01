function showContentForm() {
    const _portalId = '5040324';
    const _formId = 'd784da21-f14e-45f1-900b-9c410a73ae49';
    const _target = '#hubspot-content';
    const _region = 'na1';
    const _integrationSRC = '//js.hsforms.net/forms/v2.js';

    const formWrapper = document.getElementById('contact-page-wrapper');
    const hubSpotForm =
        '' +
        '<div class="contact-mask" onclick="closeForm()"></div>' +
        '<div class="popup-container">' +
        '   <a class="top-bar close-lightbox" onclick="closeForm()">×</a>' +
        '   <div class="scroll">' +
        '      <div id="hubspot-content">' +
        '         <div class="dot"></div><div class="dot"></div><div class="dot"></div>' +
        '      </div>' +
        '   </div>' +
        '</div>';

    formWrapper.innerHTML = hubSpotForm;

    const hubSpotScript = document.createElement('script');
    hubSpotScript.setAttribute('src', _integrationSRC);
    hubSpotScript.setAttribute('id', _formId);

    if (window.hbspt) {
        window.hbspt.forms.create({
            region: _region,
            portalId: _portalId,
            formId: _formId,
            target: _target,
            onFormSubmit: function() {
                // handle form submit
                console.log('test ----> form submited');
            }
        });
    }
}

function closeForm() {
    const formWrapper = document.getElementById('contact-page-wrapper');
    formWrapper.innerHTML = '';
}

// handle form submit
window.addEventListener('message', event => {
    if (
        event.data.type === 'hsFormCallback' &&
        event.data.eventName === 'onFormSubmit'
    ) {
        console.log('Form Submitted!');
    }
});
