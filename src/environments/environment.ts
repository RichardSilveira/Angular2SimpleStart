let client_id = '2380';

let client_url = `http://localhost:4200/`;


let authentication: Oidc.UserManagerSettings = {};
authentication.authority = `http://idp-teste.tjmt.jus.br`;
authentication.client_id = client_id;
authentication.redirect_uri = client_url + 'callback';
authentication.silent_redirect_uri = client_url;
authentication.post_logout_redirect_uri = client_url;
authentication.response_type = 'code id_token token';
authentication.scope = 'openid profile pjmt_profile email roles offline_access permissao_' + authentication.client_id;


export const environment = {
  production: true,
  authentication: authentication,
  aurora_endpoint: `http://aurora-teste.tjmt.jus.br`
};
