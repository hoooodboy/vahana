/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * Vahana API
 * OpenAPI spec version: 1.0.0
 */
import { useQuery } from "@tanstack/react-query";
import type {
  DataTag,
  DefinedInitialDataOptions,
  DefinedUseQueryResult,
  QueryFunction,
  QueryKey,
  UndefinedInitialDataOptions,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import { customAxios } from "../../mutator/customAxios";

export const getApi = (signal?: AbortSignal) => {
  return customAxios<void>({ url: `/api`, method: "GET", signal });
};

export const getGetApiQueryKey = () => {
  return [`/api`] as const;
};

export const getGetApiQueryOptions = <
  TData = Awaited<ReturnType<typeof getApi>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseQueryOptions<Awaited<ReturnType<typeof getApi>>, TError, TData>
  >;
}) => {
  const { query: queryOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetApiQueryKey();

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getApi>>> = ({
    signal,
  }) => getApi(signal);

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getApi>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> };
};

export type GetApiQueryResult = NonNullable<Awaited<ReturnType<typeof getApi>>>;
export type GetApiQueryError = unknown;

export function useGetApi<
  TData = Awaited<ReturnType<typeof getApi>>,
  TError = unknown,
>(options: {
  query: Partial<
    UseQueryOptions<Awaited<ReturnType<typeof getApi>>, TError, TData>
  > &
    Pick<
      DefinedInitialDataOptions<
        Awaited<ReturnType<typeof getApi>>,
        TError,
        Awaited<ReturnType<typeof getApi>>
      >,
      "initialData"
    >;
}): DefinedUseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetApi<
  TData = Awaited<ReturnType<typeof getApi>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseQueryOptions<Awaited<ReturnType<typeof getApi>>, TError, TData>
  > &
    Pick<
      UndefinedInitialDataOptions<
        Awaited<ReturnType<typeof getApi>>,
        TError,
        Awaited<ReturnType<typeof getApi>>
      >,
      "initialData"
    >;
}): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetApi<
  TData = Awaited<ReturnType<typeof getApi>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseQueryOptions<Awaited<ReturnType<typeof getApi>>, TError, TData>
  >;
}): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>;
};

export function useGetApi<
  TData = Awaited<ReturnType<typeof getApi>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseQueryOptions<Awaited<ReturnType<typeof getApi>>, TError, TData>
  >;
}): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>;
} {
  const queryOptions = getGetApiQueryOptions(options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
}
