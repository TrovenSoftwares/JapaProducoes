import { createRouter, createWebHistory } from 'vue-router';

import wwPage from './views/wwPage.vue';

import { initializeData, initializePlugins, onPageUnload } from '@/_common/helpers/data';

let router;
const routes = [];

function scrollBehavior(to) {
    if (to.hash) {
        return {
            el: to.hash,
            behavior: 'smooth',
        };
    } else {
        return { top: 0 };
    }
}

 
/* wwFront:start */
import pluginsSettings from '../../plugins-settings.json';

// eslint-disable-next-line no-undef
window.wwg_designInfo = {"id":"d3081fbb-ef67-4618-8682-b4fc7b4e8d19","homePageId":"ff1cd2d6-67eb-4d6b-b6da-85b21f3e9f93","authPluginId":"1fa0dd68-5069-436c-9a7d-3b54c340f1fa","baseTag":{},"defaultTheme":"light","langs":[{"lang":"pt","default":true}],"background":{"backgroundColor":"#FFFFFF"},"workflows":[],"pages":[{"id":"9f7a29eb-af8b-403d-a7ba-221a42d25780","linkId":"9f7a29eb-af8b-403d-a7ba-221a42d25780","name":"Clientes","folder":null,"paths":{"pt":"clientes","default":"clientes"},"langs":["pt"],"cmsDataSetPath":null,"sections":[{"uid":"4e13bc76-5d4f-47fd-a927-9eb49a44b4d0","sectionTitle":"Navigation","linkId":"9647177d-0ad6-4369-86cf-d52c2cd81848"},{"uid":"c0cae061-2319-407e-aec2-cbbc65ccc2db","sectionTitle":"Cabeçalho","linkId":"10940ad0-cc96-4b3c-a139-df1dd28791f6"},{"uid":"9209e0a2-d16a-4a99-9719-a4c9cc2aaa7b","sectionTitle":"Main","linkId":"ee242c8e-7529-4855-9eca-12cf91364f53"}],"pageUserGroups":[{}],"title":{"en":"","fr":"Vide | Commencer à partir de zéro","pt":"Clientes"},"meta":{"desc":{"pt":"Gerencie facilmente as informações dos seus clientes. Organize contatos, histórico de eventos e preferências no CRM feito para DJs."},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":"public/images/Frame_1.png?_wwcv=20"},{"id":"2a9a9641-d7c7-42a0-b68a-d63641651248","linkId":"2a9a9641-d7c7-42a0-b68a-d63641651248","name":"Atendimento","folder":null,"paths":{"pt":"atendimento","default":"atendimento"},"langs":["pt"],"cmsDataSetPath":null,"sections":[{"uid":"a2ae39b8-484e-45a3-9b48-a551af069003","sectionTitle":"Navigation","linkId":"3973eb4c-b043-4535-9b80-8886db96f3a6"},{"uid":"537c4dde-dd46-48c3-8996-955250ca49a1","sectionTitle":"Main","linkId":"8b691f69-9717-4201-b5ee-4ac80982ef79"},{"uid":"081bb808-48d5-4603-a1ab-7c6212da7f63","sectionTitle":"Evento","linkId":"4d715fde-4a5f-4dc9-b8df-f0a31f91a5ae"},{"uid":"385e4597-2358-4927-88ff-9b886cc4b624","sectionTitle":"Resumo do Pedido","linkId":"153e76fd-e13e-4fc4-b1fc-3d5c1b958571"},{"uid":"c55e3ea3-9503-431d-93ad-9218e0527317","sectionTitle":"Modal - Desconto","linkId":"f8ab1e73-2827-4606-b772-e1f8557b0e17"},{"uid":"1817b251-8a9a-43b3-8781-d7e32e20d513","sectionTitle":"Modal - Detalhes","linkId":"10e226cd-a4fa-43d0-ab75-402940579bee"},{"uid":"c029308f-995d-489e-8b6c-5dde6cfda9cc","sectionTitle":"Modal Apagar","linkId":"d40482fd-f62b-4c29-a2a4-73f5107813fc"},{"uid":"35d0e449-8d8f-442f-9e06-2fd9031a2172","sectionTitle":"Cadastro","linkId":"3aeaed5b-9c6d-4e5b-8375-7e2ff400e6be"},{"uid":"c5cf93a7-1a69-4478-ab6d-9d804e7c2d54","sectionTitle":"Novo Evento","linkId":"08c2af75-80d9-4df2-9e54-550caa79f5d4"},{"uid":"0e494cd0-5459-489e-8b8c-d4ad9aa25ca5","sectionTitle":"Resumo do Evento","linkId":"f9abc252-6a14-49c2-8224-670bfa2baa8e"},{"uid":"ca42512d-c04b-4b61-83d2-1ff5954a8075","sectionTitle":"Ver Contrato","linkId":"29fbbedc-f9bc-46c8-b7b1-bbc41efe782a"}],"pageUserGroups":[{}],"title":{"en":"","fr":"Vide | Commencer à partir de zéro","pt":"Atendimento"},"meta":{"desc":{"pt":"Registre atendimentos, vendas e interações de forma rápida e eficiente. Use o PDV do CRM para DJs e ofereça uma experiência profissional nos seus eventos."},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":"public/images/Frame_1.png?_wwcv=20"},{"id":"49acc0ab-f87d-4d6c-89b0-e8305d930de3","linkId":"49acc0ab-f87d-4d6c-89b0-e8305d930de3","name":"Financeiro","folder":null,"paths":{"pt":"financeiro","default":"financeiro"},"langs":["pt"],"cmsDataSetPath":null,"sections":[{"uid":"3b544a05-550d-4258-a907-c563e3e8b923","sectionTitle":"Navigation","linkId":"0e3a79da-42dd-4f27-8057-96a0766eb5dc"},{"uid":"72e7feaa-dc4e-45b1-8d5c-df5a7121a189","sectionTitle":"Cabeçalho","linkId":"960a8a1e-50c4-429c-87df-80c2f96a096e"},{"uid":"dffcb9a2-0025-448b-bdb8-5d71b9cb2a79","sectionTitle":"Main","linkId":"95954647-acec-4393-b1ff-1cbb2daec825"}],"pageUserGroups":[{}],"title":{"en":"","fr":"Vide | Commencer à partir de zéro","pt":"Financeiro"},"meta":{"desc":{"pt":"Controle suas finanças com clareza. Registre ganhos, despesas e tenha uma visão completa dos resultados dos seus eventos como DJ."},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":"public/images/Frame_1.png?_wwcv=20"},{"id":"60437d09-54c3-46ed-8029-e5038b9f4ba9","linkId":"60437d09-54c3-46ed-8029-e5038b9f4ba9","name":"Dashboard","folder":null,"paths":{"pt":"dashboard","default":"dashboard"},"langs":["pt"],"cmsDataSetPath":null,"sections":[{"uid":"b1cc912b-8cf9-45eb-862c-5d03ab469994","sectionTitle":"Navigation","linkId":"187774c7-3240-4188-95de-57be20b9a5dd"},{"uid":"a090b4a2-8fd4-4817-8122-4b641b7b4b9a","sectionTitle":"Header","linkId":"f9c27bf4-25bd-4124-a9aa-0c2d7b06e29a"},{"uid":"510f3a82-4046-4a8a-9391-c774dfe0c629","sectionTitle":"Views & Attributes","linkId":"13aed0ac-783d-48db-9244-75abb16d9f8f"},{"uid":"84e2e4b1-0364-46a9-aefc-804173b9dd68","sectionTitle":"Content","linkId":"3b108931-9bc4-4903-8e57-236ca3728c8c"}],"pageUserGroups":[{}],"title":{"en":"","fr":"Vide | Commencer à partir de zéro","pt":"Dashboard"},"meta":{"desc":{"pt":"Visualize seus dados em tempo real. Acompanhe eventos, atendimentos e desempenho em um painel intuitivo feito para DJs."},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":"public/images/Frame_1.png?_wwcv=20"},{"id":"c800cb43-82cc-42eb-8509-8796a532590f","linkId":"c800cb43-82cc-42eb-8509-8796a532590f","name":"Eventos","folder":null,"paths":{"pt":"eventos","default":"eventos"},"langs":["pt"],"cmsDataSetPath":null,"sections":[{"uid":"0e3b36a3-c5dd-4c36-b36c-d85970703232","sectionTitle":"Navigation","linkId":"d1687965-327e-47b4-8938-dd65f3fc5934"},{"uid":"8b27feab-e9c4-406b-878a-ec5a94b4c4d1","sectionTitle":"Cabeçalho","linkId":"95e8c538-0bd4-4699-bc83-0f2503d1e8f2"},{"uid":"b04ba016-d4b8-4791-9d1a-552a64483a9e","sectionTitle":"Main","linkId":"462d0054-60f8-445d-bd55-9c10c6c48217"}],"pageUserGroups":[{}],"title":{"en":"","fr":"Vide | Commencer à partir de zéro","pt":"Eventos"},"meta":{"desc":{"pt":"Gerencie seus eventos com facilidade. Crie, edite e acompanhe todos os detalhes das suas apresentações no CRM ideal para DJs.\n\n"},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":"public/images/Frame_1.png?_wwcv=20"},{"id":"157f54f4-719a-4cd9-be99-b5a6e83e676a","linkId":"157f54f4-719a-4cd9-be99-b5a6e83e676a","name":"Orçamentos","folder":null,"paths":{"pt":"orcamentos","default":"orcamentos"},"langs":["pt"],"cmsDataSetPath":null,"sections":[{"uid":"d0c03492-86e2-4cf1-b8dd-2ab8bb2bd6dc","sectionTitle":"Navigation","linkId":"3666337f-ea8f-43f5-aabc-2e193d44f20d"},{"uid":"64d3ba75-6a85-4c03-9359-1512a2c23f44","sectionTitle":"Cabeçalho","linkId":"3671df4d-ea06-45a8-a4e2-10e7c3b1005d"},{"uid":"bf226ce3-1a33-45d9-8898-82fcd149e19b","sectionTitle":"Main","linkId":"1e815daa-c7cf-435b-8884-afb5e848fb57"}],"pageUserGroups":[{}],"title":{"en":"","fr":"Vide | Commencer à partir de zéro","pt":"Orçamentos"},"meta":{"desc":{"pt":"Crie e envie orçamentos personalizados para seus clientes. Profissionalize suas propostas com o CRM desenvolvido para DJs."},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":"public/images/Frame_1.png?_wwcv=20"},{"id":"5aeb19f3-8087-4089-8ad8-579bdd12655f","linkId":"5aeb19f3-8087-4089-8ad8-579bdd12655f","name":"Produtos","folder":null,"paths":{"pt":"produtos","default":"produtos"},"langs":["pt"],"cmsDataSetPath":null,"sections":[{"uid":"409deefb-d223-494d-b0b7-9be8eb77a50f","sectionTitle":"Navigation","linkId":"4ea95d25-6b89-4617-b248-fe508efbb488"},{"uid":"2c735550-4645-44c1-adef-fd3d4950f86f","sectionTitle":"Cabeçalho","linkId":"4f784a1a-a702-4fc5-b1f9-d762a28614db"},{"uid":"56afa79c-9167-4fad-846a-6fbcb3e38954","sectionTitle":"Main","linkId":"535ef991-d62f-4dc4-8751-ec1b1982f964"}],"pageUserGroups":[{}],"title":{"en":"","fr":"Vide | Commencer à partir de zéro","pt":"Produtos"},"meta":{"desc":{"pt":"Organize e gerencie seus produtos e serviços com facilidade. Controle preços, estoque e ofertas no CRM exclusivo para DJs"},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":"public/images/Frame_1.png?_wwcv=20"},{"id":"37268f1c-8dcc-4851-835d-6badb4a187b8","linkId":"37268f1c-8dcc-4851-835d-6badb4a187b8","name":"WhatsApp","folder":null,"paths":{"pt":"whatsapp","default":"whatsapp"},"langs":["pt"],"cmsDataSetPath":null,"sections":[{"uid":"ef6c5084-e3b1-4be8-9c95-9a759155e710","sectionTitle":"Navigation","linkId":"616daf1f-af58-4fc9-b791-4db5102eeec3"},{"uid":"a15ee218-28ad-4572-9f2f-e207e298131e","sectionTitle":"Header","linkId":"45c4ea9e-c2b8-4cdb-9f22-34f31ffc5f87"},{"uid":"76370ae4-3b1a-4ce6-b77d-73eace5b1ead","sectionTitle":"Main","linkId":"3d75e974-618d-4352-9a36-2354bac3a60f"}],"pageUserGroups":[{}],"title":{"en":"","fr":"Vide | Commencer à partir de zéro","pt":"WhatsApp"},"meta":{"desc":{"pt":"Conecte-se com seus clientes via WhatsApp diretamente pelo CRM. Facilite o atendimento, envie mensagens e acompanhe conversas em um só lugar.\n\n"},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":"public/images/Frame_1.png?_wwcv=20"},{"id":"e61e1740-c4ed-4e67-9caf-91155975fda7","linkId":"e61e1740-c4ed-4e67-9caf-91155975fda7","name":"Criar Conta","folder":null,"paths":{"pt":"criar-conta","default":"criar-conta"},"langs":["pt"],"cmsDataSetPath":null,"sections":[{"uid":"a02c4533-41aa-4bfb-9334-fe3016efd9f3","sectionTitle":"Section","linkId":"dc6dec2e-2081-4db4-8553-637f1cc62f35"}],"pageUserGroups":[],"title":{"pt":"Criar Conta"},"meta":{"desc":{"pt":"Crie sua conta no CRM exclusivo para DJs. Comece a organizar seus eventos, clientes e atendimentos com eficiência e praticidade."},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":"public/images/Frame_1.png?_wwcv=20"},{"id":"ff1cd2d6-67eb-4d6b-b6da-85b21f3e9f93","linkId":"ff1cd2d6-67eb-4d6b-b6da-85b21f3e9f93","name":"Login","folder":null,"paths":{"pt":"login","default":"login"},"langs":["pt"],"cmsDataSetPath":null,"sections":[{"uid":"8950bf08-0626-4c85-a086-57ed0c8ac516","sectionTitle":"Section","linkId":"c2081cc8-6c0e-48e8-a408-a43f98ac8972"}],"pageUserGroups":[],"title":{"pt":"Login"},"meta":{"desc":{"pt":"Acesse o sistema exclusivo para DJs. Faça login no CRM e gerencie seus eventos, contatos e agenda com praticidade e segurança."},"keywords":{"pt":""},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":"public/images/Frame_1.png?_wwcv=20"},{"id":"e6654c97-d90f-4850-abff-1f3f76948b84","linkId":"e6654c97-d90f-4850-abff-1f3f76948b84","name":"Orçamento","folder":null,"paths":{"pt":"orcamento","default":"orcamento"},"langs":["pt"],"cmsDataSetPath":null,"sections":[{"uid":"a147a1f4-bdb5-4806-9b66-ff4567837d01","sectionTitle":"Navigation","linkId":"da3587fb-5746-4da0-9a58-4deac6096bae"},{"uid":"fdabf942-6f69-467c-aa15-6ae09bbb05b6","sectionTitle":"Cabeçalho","linkId":"79cc835b-9544-4537-a2ce-ceb45ea38911"},{"uid":"1c740165-4f88-480d-b47a-6543e4e7c0a2","sectionTitle":"Main","linkId":"5c8e7294-7213-4267-92e3-7be9f9133d7d"}],"pageUserGroups":[{}],"title":{"en":"","fr":"Vide | Commencer à partir de zéro","pt":"Orçamento"},"meta":{"desc":{"pt":"Crie e envie orçamentos personalizados para seus clientes. Profissionalize suas propostas com o CRM desenvolvido para DJs."},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":"public/images/Frame_1.png?_wwcv=20"}],"plugins":[{"id":"f9ef41c3-1c53-4857-855b-f2f6a40b7186","name":"Supabase","namespace":"supabase"},{"id":"1fa0dd68-5069-436c-9a7d-3b54c340f1fa","name":"Supabase Auth","namespace":"supabaseAuth"},{"id":"66a79c98-70e7-4bc4-8859-20776b024ec2","name":"PWA","namespace":"pwa"},{"id":"69d4a5bb-09a3-4f3d-a94e-667c21c057eb","name":"NPM","namespace":"npm"},{"id":"ee24f5ac-e15e-4ddd-baa4-0b4baedf90c9","name":"CSV","namespace":"csv"},{"id":"e93a2dfd-9b19-473e-b445-c666fed4e14a","name":"Auth0","namespace":"auth0"},{"id":"9c40819b-4a8f-468f-9ba5-4b9699f3361f","name":"Charts","namespace":"chartjs"},{"id":"d66a250d-8468-469e-ad33-ee028f632398","name":"OpenAI","namespace":"openai"},{"id":"36816525-6e0d-4217-b792-19f5d8682c46","name":"GraphQL","namespace":"graphql"},{"id":"832d6f7a-42c3-43f1-a3ce-9a678272f811","name":"Date","namespace":"dayjs"},{"id":"fdf6b667-9515-4086-87ef-6042fc6f20fb","name":"Google Sheets","namespace":"googleSheets"},{"id":"2bd1c688-31c5-443e-ae25-59aa5b6431fb","name":"REST API","namespace":"restApi"}]};
// eslint-disable-next-line no-undef
window.wwg_cacheVersion = 20;
// eslint-disable-next-line no-undef
window.wwg_pluginsSettings = pluginsSettings;
// eslint-disable-next-line no-undef
window.wwg_disableManifest = false;

const defaultLang = window.wwg_designInfo.langs.find(({ default: isDefault }) => isDefault) || {};

const registerRoute = (page, lang, forcedPath) => {
    const langSlug = !lang.default || lang.isDefaultPath ? `/${lang.lang}` : '';
    let path =
        forcedPath ||
        (page.id === window.wwg_designInfo.homePageId ? '/' : `/${page.paths[lang.lang] || page.paths.default}`);

    //Replace params
    path = path.replace(/{{([\w]+)\|([^/]+)?}}/g, ':$1');

    routes.push({
        path: langSlug + path,
        component: wwPage,
        name: `page-${page.id}-${lang.lang}`,
        meta: {
            pageId: page.id,
            lang,
            isPrivate: !!page.pageUserGroups?.length,
        },
        async beforeEnter(to, from) {
            if (to.name === from.name) return;
            //Set page lang
            wwLib.wwLang.defaultLang = defaultLang.lang;
            wwLib.$store.dispatch('front/setLang', lang.lang);

            //Init plugins
            await initializePlugins();

            //Check if private page
            if (page.pageUserGroups?.length) {
                // cancel navigation if no plugin
                if (!wwLib.wwAuth.plugin) {
                    return false;
                }

                await wwLib.wwAuth.init();

                // Redirect to not sign in page if not logged
                if (!wwLib.wwAuth.getIsAuthenticated()) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthenticatedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }

                //Check roles are required
                if (
                    page.pageUserGroups.length > 1 &&
                    !wwLib.wwAuth.matchUserGroups(page.pageUserGroups.map(({ userGroup }) => userGroup))
                ) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthorizedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }
            }

            try {
                await import(`@/pages/${page.id.split('_')[0]}.js`);
                await wwLib.wwWebsiteData.fetchPage(page.id);

                //Scroll to section or on top after page change
                if (to.hash) {
                    const targetElement = document.getElementById(to.hash.replace('#', ''));
                    if (targetElement) targetElement.scrollIntoView();
                } else {
                    document.body.scrollTop = document.documentElement.scrollTop = 0;
                }

                return;
            } catch (err) {
                wwLib.$store.dispatch('front/showPageLoadProgress', false);

                if (err.redirectUrl) {
                    return { path: err.redirectUrl || '404' };
                } else {
                    //Any other error: go to target page using window.location
                    window.location = to.fullPath;
                }
            }
        },
    });
};

for (const page of window.wwg_designInfo.pages) {
    for (const lang of window.wwg_designInfo.langs) {
        if (!page.langs.includes(lang.lang)) continue;
        registerRoute(page, lang);
    }
}

const page404 = window.wwg_designInfo.pages.find(page => page.paths.default === '404');
if (page404) {
    for (const lang of window.wwg_designInfo.langs) {
        // Create routes /:lang/:pathMatch(.*)* etc for all langs of the 404 page
        if (!page404.langs.includes(lang.lang)) continue;
        registerRoute(
            page404,
            {
                default: false,
                lang: lang.lang,
            },
            '/:pathMatch(.*)*'
        );
    }
    // Create route /:pathMatch(.*)* using default project lang
    registerRoute(page404, { default: true, isDefaultPath: false, lang: defaultLang.lang }, '/:pathMatch(.*)*');
} else {
    routes.push({
        path: '/:pathMatch(.*)*',
        async beforeEnter() {
            window.location.href = '/404';
        },
    });
}

let routerOptions = {};

const isProd =
    !window.location.host.includes(
        '-staging.' + (process.env.WW_ENV === 'staging' ? process.env.VUE_APP_PREVIEW_URL : '')
    ) && !window.location.host.includes(process.env.VUE_APP_PREVIEW_URL);

if (isProd && window.wwg_designInfo.baseTag?.href) {
    let baseTag = window.wwg_designInfo.baseTag.href;
    if (!baseTag.startsWith('/')) {
        baseTag = '/' + baseTag;
    }
    if (!baseTag.endsWith('/')) {
        baseTag += '/';
    }

    routerOptions = {
        base: baseTag,
        history: createWebHistory(baseTag),
        routes,
    };
} else {
    routerOptions = {
        history: createWebHistory(),
        routes,
    };
}

router = createRouter({
    ...routerOptions,
    scrollBehavior,
});

//Trigger on page unload
let isFirstNavigation = true;
router.beforeEach(async (to, from) => {
    if (to.name === from.name) return;
    if (!isFirstNavigation) await onPageUnload();
    isFirstNavigation = false;
    wwLib.globalVariables._navigationId++;
    return;
});

//Init page
router.afterEach((to, from, failure) => {
    wwLib.$store.dispatch('front/showPageLoadProgress', false);
    let fromPath = from.path;
    let toPath = to.path;
    if (!fromPath.endsWith('/')) fromPath = fromPath + '/';
    if (!toPath.endsWith('/')) toPath = toPath + '/';
    if (failure || (from.name && toPath === fromPath)) return;
    initializeData(to);
});
/* wwFront:end */

export default router;
