
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```sh
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const UV_INDEX_URL: string;
	export const UV_DEFAULT_INDEX: string;
	export const no_proxy: string;
	export const LANGUAGE: string;
	export const USER: string;
	export const npm_config_user_agent: string;
	export const CI: string;
	export const npm_node_execpath: string;
	export const ENV_NAME: string;
	export const SHLVL: string;
	export const PYTHON_PIP_VERSION: string;
	export const HOME: string;
	export const OLDPWD: string;
	export const npm_package_json: string;
	export const npm_package_engines_node: string;
	export const GPG_KEY: string;
	export const PS1: string;
	export const IDC: string;
	export const https_proxy: string;
	export const LOGNAME: string;
	export const pnpm_config_verify_deps_before_run: string;
	export const http_proxy: string;
	export const _: string;
	export const npm_config_prefix: string;
	export const AGENT_TASK_ID: string;
	export const LLM_GATEWAY_BASE_URL: string;
	export const PYTHON_GET_PIP_URL: string;
	export const npm_config_registry: string;
	export const UV_HTTP_TIMEOUT: string;
	export const npm_config_node_gyp: string;
	export const PATH: string;
	export const npm_package_name: string;
	export const NODE: string;
	export const ftp_proxy: string;
	export const npm_config_frozen_lockfile: string;
	export const AGENT_TASK_WORKSPACE_DIR: string;
	export const TIKTOKEN_CACHE_DIR: string;
	export const LANG: string;
	export const npm_lifecycle_script: string;
	export const npm_config_global: string;
	export const npm_package_version: string;
	export const npm_lifecycle_event: string;
	export const npm_config_verify_deps_before_run: string;
	export const NODE_PATH: string;
	export const PYTHON_VERSION: string;
	export const UV_PROJECT_ENVIRONMENT: string;
	export const AGENT_TYPE: string;
	export const proxy: string;
	export const INFRA_ENV: string;
	export const PWD: string;
	export const npm_execpath: string;
	export const PYTHON_GET_PIP_SHA256: string;
	export const PYTHONPATH: string;
	export const npm_config__jsr_registry: string;
	export const npm_command: string;
	export const PNPM_SCRIPT_SRC_DIR: string;
	export const AGENT_NAME: string;
	export const INIT_CWD: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > [!NOTE] In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		UV_INDEX_URL: string;
		UV_DEFAULT_INDEX: string;
		no_proxy: string;
		LANGUAGE: string;
		USER: string;
		npm_config_user_agent: string;
		CI: string;
		npm_node_execpath: string;
		ENV_NAME: string;
		SHLVL: string;
		PYTHON_PIP_VERSION: string;
		HOME: string;
		OLDPWD: string;
		npm_package_json: string;
		npm_package_engines_node: string;
		GPG_KEY: string;
		PS1: string;
		IDC: string;
		https_proxy: string;
		LOGNAME: string;
		pnpm_config_verify_deps_before_run: string;
		http_proxy: string;
		_: string;
		npm_config_prefix: string;
		AGENT_TASK_ID: string;
		LLM_GATEWAY_BASE_URL: string;
		PYTHON_GET_PIP_URL: string;
		npm_config_registry: string;
		UV_HTTP_TIMEOUT: string;
		npm_config_node_gyp: string;
		PATH: string;
		npm_package_name: string;
		NODE: string;
		ftp_proxy: string;
		npm_config_frozen_lockfile: string;
		AGENT_TASK_WORKSPACE_DIR: string;
		TIKTOKEN_CACHE_DIR: string;
		LANG: string;
		npm_lifecycle_script: string;
		npm_config_global: string;
		npm_package_version: string;
		npm_lifecycle_event: string;
		npm_config_verify_deps_before_run: string;
		NODE_PATH: string;
		PYTHON_VERSION: string;
		UV_PROJECT_ENVIRONMENT: string;
		AGENT_TYPE: string;
		proxy: string;
		INFRA_ENV: string;
		PWD: string;
		npm_execpath: string;
		PYTHON_GET_PIP_SHA256: string;
		PYTHONPATH: string;
		npm_config__jsr_registry: string;
		npm_command: string;
		PNPM_SCRIPT_SRC_DIR: string;
		AGENT_NAME: string;
		INIT_CWD: string;
		NODE_ENV: string;
		[key: `VITE_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `VITE_${string}`]: string | undefined;
	}
}
