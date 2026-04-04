export type ApiClientOptions = {
  baseUrl?: string;
  headers?: HeadersInit;
};

const DEFAULT_HEADERS: HeadersInit = {
  'Content-Type': 'application/json'
};

export function createApiClient(options: ApiClientOptions = {}) {
  const baseUrl = options.baseUrl ?? process.env.NEXT_PUBLIC_API_BASE_URL ?? '';

  async function request<T>(path: string, init?: RequestInit): Promise<T> {
    const response = await fetch(`${baseUrl}${path}`, {
      ...init,
      headers: {
        ...DEFAULT_HEADERS,
        ...options.headers,
        ...init?.headers
      },
      cache: 'no-store'
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    return response.json() as Promise<T>;
  }

  return { request };
}
