import { createElement } from 'lwc';

import Test from 'x/test';

it('should log an error if the template contains an undefined identifier', () => {
    const elm = createElement('x-test', { is: Test });
    expect(() => {
        document.body.appendChild(elm);
    }).toLogErrorDev(
        new RegExp(
            `The template rendered by .+ references \`this.foo\`, which is not declared. Check for a typo in the template.`
        )
    );
});
