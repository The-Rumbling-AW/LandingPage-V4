import en from './locals/en.json'
import es from './locals/es.json'

import { createI18n } from 'vue-i18n'
const i18n = createI18n({
    locale: 'es',
    messages: {
        en,
        es
    },
    warnHtmlMessage: false
})

export default i18n;
