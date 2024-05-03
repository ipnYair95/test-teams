import { PublicClientApplication } from "@azure/msal-browser"

export const msalConfig = {
    auth: {
        clientId: 'f1c2ba5f-ba58-4edb-959f-d82f881d9729',
        authority: 'https://login.microsoftonline.com/346a1d1d-e75b-4753-902b-74ed60ae77a1',
        redirectUri: '/redirect',
        postLogoutUri: '/redirect'
    },
    cache: {
        cacheLocation: 'sessionStorage',
        storeAuthStateInCookie: false
    }
}

export const msalRequest = {
    scopes: ["Chat.ReadWrite", "ChannelMessage.Send"]
};