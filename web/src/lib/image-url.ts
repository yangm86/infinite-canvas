// Agnes 生成的图片直链会被浏览器拒绝（防盗链/CORS），统一改走自建代理再拉取。
const AGNES_IMAGE_HOST = "platform-outputs.agnes-ai.space";
const AGNES_IMAGE_PROXY_ORIGIN = "https://proxy.lovejk.ccwu.cc";

export function rewriteAgnesImageUrl(rawUrl: string) {
    if (typeof rawUrl !== "string") return rawUrl;

    try {
        const url = new URL(rawUrl);

        if (url.hostname === AGNES_IMAGE_HOST) {
            return `${AGNES_IMAGE_PROXY_ORIGIN}${url.pathname}${url.search}`;
        }
    } catch {
        // 非标准 URL 保持原样
    }

    return rawUrl;
}
