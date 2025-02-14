/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * Vahana API
 * OpenAPI spec version: 1.0.0
 */
import { useMutation, useQuery } from "@tanstack/react-query";
import type {
  MutationFunction,
  QueryFunction,
  QueryKey,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  APIResponseBoolean,
  APIResponseCarInventoryResponseDto,
  APIResponseCarResponseDto,
  APIResponseForbiddenDto,
  APIResponseUnauthorizedDto,
  CreateCarDto,
  CreateCarInventoryDto,
  UpdateCarDto,
  UpdateCarInventoryDto,
} from "../../model";
import { customAxios } from "../../mutator/customAxios";
import type { ErrorType } from "../../mutator/customAxios";

/**
 * 차량 목록 조회
 * @summary 차량 목록 조회
 */
export const getApiCars = (signal?: AbortSignal) => {
  return customAxios<APIResponseCarResponseDto>({
    url: `/api/cars`,
    method: "GET",
    signal,
  });
};

export const getGetApiCarsQueryKey = () => {
  return [`/api/cars`] as const;
};

export const getGetApiCarsQueryOptions = <
  TData = Awaited<ReturnType<typeof getApiCars>>,
  TError = ErrorType<unknown>,
>(options?: {
  query?: UseQueryOptions<
    Awaited<ReturnType<typeof getApiCars>>,
    TError,
    TData
  >;
}) => {
  const { query: queryOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetApiCarsQueryKey();

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiCars>>> = ({
    signal,
  }) => getApiCars(signal);

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getApiCars>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type GetApiCarsQueryResult = NonNullable<
  Awaited<ReturnType<typeof getApiCars>>
>;
export type GetApiCarsQueryError = ErrorType<unknown>;

/**
 * @summary 차량 목록 조회
 */

export function useGetApiCars<
  TData = Awaited<ReturnType<typeof getApiCars>>,
  TError = ErrorType<unknown>,
>(options?: {
  query?: UseQueryOptions<
    Awaited<ReturnType<typeof getApiCars>>,
    TError,
    TData
  >;
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = getGetApiCarsQueryOptions(options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
}

/**
 * [어드민] 차량 등록
 * @summary [어드민] 차량 등록
 */
export const postApiCars = (
  createCarDto: CreateCarDto,
  signal?: AbortSignal,
) => {
  return customAxios<APIResponseBoolean>({
    url: `/api/cars`,
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data: createCarDto,
    signal,
  });
};

export const getPostApiCarsMutationOptions = <
  TError = ErrorType<APIResponseUnauthorizedDto | APIResponseForbiddenDto>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postApiCars>>,
    TError,
    { data: CreateCarDto },
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<typeof postApiCars>>,
  TError,
  { data: CreateCarDto },
  TContext
> => {
  const mutationKey = ["postApiCars"];
  const { mutation: mutationOptions } = options
    ? options.mutation &&
      "mutationKey" in options.mutation &&
      options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey } };

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof postApiCars>>,
    { data: CreateCarDto }
  > = (props) => {
    const { data } = props ?? {};

    return postApiCars(data);
  };

  return { mutationFn, ...mutationOptions };
};

export type PostApiCarsMutationResult = NonNullable<
  Awaited<ReturnType<typeof postApiCars>>
>;
export type PostApiCarsMutationBody = CreateCarDto;
export type PostApiCarsMutationError = ErrorType<
  APIResponseUnauthorizedDto | APIResponseForbiddenDto
>;

/**
 * @summary [어드민] 차량 등록
 */
export const usePostApiCars = <
  TError = ErrorType<APIResponseUnauthorizedDto | APIResponseForbiddenDto>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postApiCars>>,
    TError,
    { data: CreateCarDto },
    TContext
  >;
}): UseMutationResult<
  Awaited<ReturnType<typeof postApiCars>>,
  TError,
  { data: CreateCarDto },
  TContext
> => {
  const mutationOptions = getPostApiCarsMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * [어드민] 차량 상세 조회
 * @summary [어드민] 차량 상세 조회
 */
export const getApiCarsId = (id: string, signal?: AbortSignal) => {
  return customAxios<APIResponseCarInventoryResponseDto>({
    url: `/api/cars/${id}`,
    method: "GET",
    signal,
  });
};

export const getGetApiCarsIdQueryKey = (id: string) => {
  return [`/api/cars/${id}`] as const;
};

export const getGetApiCarsIdQueryOptions = <
  TData = Awaited<ReturnType<typeof getApiCarsId>>,
  TError = ErrorType<APIResponseUnauthorizedDto | APIResponseForbiddenDto>,
>(
  id: string,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof getApiCarsId>>,
      TError,
      TData
    >;
  },
) => {
  const { query: queryOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetApiCarsIdQueryKey(id);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiCarsId>>> = ({
    signal,
  }) => getApiCarsId(id, signal);

  return {
    queryKey,
    queryFn,
    enabled: !!id,
    ...queryOptions,
  } as UseQueryOptions<
    Awaited<ReturnType<typeof getApiCarsId>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type GetApiCarsIdQueryResult = NonNullable<
  Awaited<ReturnType<typeof getApiCarsId>>
>;
export type GetApiCarsIdQueryError = ErrorType<
  APIResponseUnauthorizedDto | APIResponseForbiddenDto
>;

/**
 * @summary [어드민] 차량 상세 조회
 */

export function useGetApiCarsId<
  TData = Awaited<ReturnType<typeof getApiCarsId>>,
  TError = ErrorType<APIResponseUnauthorizedDto | APIResponseForbiddenDto>,
>(
  id: string,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof getApiCarsId>>,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = getGetApiCarsIdQueryOptions(id, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
}

/**
 * [어드민] 차량 수정
 * @summary [어드민] 차량 수정
 */
export const patchApiCarsId = (id: string, updateCarDto: UpdateCarDto) => {
  return customAxios<APIResponseBoolean>({
    url: `/api/cars/${id}`,
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    data: updateCarDto,
  });
};

export const getPatchApiCarsIdMutationOptions = <
  TError = ErrorType<APIResponseUnauthorizedDto | APIResponseForbiddenDto>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof patchApiCarsId>>,
    TError,
    { id: string; data: UpdateCarDto },
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<typeof patchApiCarsId>>,
  TError,
  { id: string; data: UpdateCarDto },
  TContext
> => {
  const mutationKey = ["patchApiCarsId"];
  const { mutation: mutationOptions } = options
    ? options.mutation &&
      "mutationKey" in options.mutation &&
      options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey } };

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof patchApiCarsId>>,
    { id: string; data: UpdateCarDto }
  > = (props) => {
    const { id, data } = props ?? {};

    return patchApiCarsId(id, data);
  };

  return { mutationFn, ...mutationOptions };
};

export type PatchApiCarsIdMutationResult = NonNullable<
  Awaited<ReturnType<typeof patchApiCarsId>>
>;
export type PatchApiCarsIdMutationBody = UpdateCarDto;
export type PatchApiCarsIdMutationError = ErrorType<
  APIResponseUnauthorizedDto | APIResponseForbiddenDto
>;

/**
 * @summary [어드민] 차량 수정
 */
export const usePatchApiCarsId = <
  TError = ErrorType<APIResponseUnauthorizedDto | APIResponseForbiddenDto>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof patchApiCarsId>>,
    TError,
    { id: string; data: UpdateCarDto },
    TContext
  >;
}): UseMutationResult<
  Awaited<ReturnType<typeof patchApiCarsId>>,
  TError,
  { id: string; data: UpdateCarDto },
  TContext
> => {
  const mutationOptions = getPatchApiCarsIdMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * [어드민] 차량 삭제
 * @summary [어드민] 차량 삭제
 */
export const deleteApiCarsId = (id: string) => {
  return customAxios<APIResponseBoolean>({
    url: `/api/cars/${id}`,
    method: "DELETE",
  });
};

export const getDeleteApiCarsIdMutationOptions = <
  TError = ErrorType<APIResponseUnauthorizedDto | APIResponseForbiddenDto>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof deleteApiCarsId>>,
    TError,
    { id: string },
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<typeof deleteApiCarsId>>,
  TError,
  { id: string },
  TContext
> => {
  const mutationKey = ["deleteApiCarsId"];
  const { mutation: mutationOptions } = options
    ? options.mutation &&
      "mutationKey" in options.mutation &&
      options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey } };

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof deleteApiCarsId>>,
    { id: string }
  > = (props) => {
    const { id } = props ?? {};

    return deleteApiCarsId(id);
  };

  return { mutationFn, ...mutationOptions };
};

export type DeleteApiCarsIdMutationResult = NonNullable<
  Awaited<ReturnType<typeof deleteApiCarsId>>
>;

export type DeleteApiCarsIdMutationError = ErrorType<
  APIResponseUnauthorizedDto | APIResponseForbiddenDto
>;

/**
 * @summary [어드민] 차량 삭제
 */
export const useDeleteApiCarsId = <
  TError = ErrorType<APIResponseUnauthorizedDto | APIResponseForbiddenDto>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof deleteApiCarsId>>,
    TError,
    { id: string },
    TContext
  >;
}): UseMutationResult<
  Awaited<ReturnType<typeof deleteApiCarsId>>,
  TError,
  { id: string },
  TContext
> => {
  const mutationOptions = getDeleteApiCarsIdMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * [어드민] 차량 재고 등록
 * @summary [어드민] 차량 재고 등록
 */
export const postApiCarsIdInventory = (
  id: string,
  createCarInventoryDto: CreateCarInventoryDto,
  signal?: AbortSignal,
) => {
  return customAxios<APIResponseBoolean>({
    url: `/api/cars/${id}/inventory`,
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data: createCarInventoryDto,
    signal,
  });
};

export const getPostApiCarsIdInventoryMutationOptions = <
  TError = ErrorType<APIResponseUnauthorizedDto | APIResponseForbiddenDto>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postApiCarsIdInventory>>,
    TError,
    { id: string; data: CreateCarInventoryDto },
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<typeof postApiCarsIdInventory>>,
  TError,
  { id: string; data: CreateCarInventoryDto },
  TContext
> => {
  const mutationKey = ["postApiCarsIdInventory"];
  const { mutation: mutationOptions } = options
    ? options.mutation &&
      "mutationKey" in options.mutation &&
      options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey } };

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof postApiCarsIdInventory>>,
    { id: string; data: CreateCarInventoryDto }
  > = (props) => {
    const { id, data } = props ?? {};

    return postApiCarsIdInventory(id, data);
  };

  return { mutationFn, ...mutationOptions };
};

export type PostApiCarsIdInventoryMutationResult = NonNullable<
  Awaited<ReturnType<typeof postApiCarsIdInventory>>
>;
export type PostApiCarsIdInventoryMutationBody = CreateCarInventoryDto;
export type PostApiCarsIdInventoryMutationError = ErrorType<
  APIResponseUnauthorizedDto | APIResponseForbiddenDto
>;

/**
 * @summary [어드민] 차량 재고 등록
 */
export const usePostApiCarsIdInventory = <
  TError = ErrorType<APIResponseUnauthorizedDto | APIResponseForbiddenDto>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postApiCarsIdInventory>>,
    TError,
    { id: string; data: CreateCarInventoryDto },
    TContext
  >;
}): UseMutationResult<
  Awaited<ReturnType<typeof postApiCarsIdInventory>>,
  TError,
  { id: string; data: CreateCarInventoryDto },
  TContext
> => {
  const mutationOptions = getPostApiCarsIdInventoryMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * [어드민] 차량 재고 수정
 * @summary [어드민] 차량 재고 수정
 */
export const patchApiCarsIdInventoryInventoryId = (
  id: string,
  inventoryId: string,
  updateCarInventoryDto: UpdateCarInventoryDto,
) => {
  return customAxios<APIResponseBoolean>({
    url: `/api/cars/${id}/inventory/${inventoryId}`,
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    data: updateCarInventoryDto,
  });
};

export const getPatchApiCarsIdInventoryInventoryIdMutationOptions = <
  TError = ErrorType<APIResponseUnauthorizedDto | APIResponseForbiddenDto>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof patchApiCarsIdInventoryInventoryId>>,
    TError,
    { id: string; inventoryId: string; data: UpdateCarInventoryDto },
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<typeof patchApiCarsIdInventoryInventoryId>>,
  TError,
  { id: string; inventoryId: string; data: UpdateCarInventoryDto },
  TContext
> => {
  const mutationKey = ["patchApiCarsIdInventoryInventoryId"];
  const { mutation: mutationOptions } = options
    ? options.mutation &&
      "mutationKey" in options.mutation &&
      options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey } };

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof patchApiCarsIdInventoryInventoryId>>,
    { id: string; inventoryId: string; data: UpdateCarInventoryDto }
  > = (props) => {
    const { id, inventoryId, data } = props ?? {};

    return patchApiCarsIdInventoryInventoryId(id, inventoryId, data);
  };

  return { mutationFn, ...mutationOptions };
};

export type PatchApiCarsIdInventoryInventoryIdMutationResult = NonNullable<
  Awaited<ReturnType<typeof patchApiCarsIdInventoryInventoryId>>
>;
export type PatchApiCarsIdInventoryInventoryIdMutationBody =
  UpdateCarInventoryDto;
export type PatchApiCarsIdInventoryInventoryIdMutationError = ErrorType<
  APIResponseUnauthorizedDto | APIResponseForbiddenDto
>;

/**
 * @summary [어드민] 차량 재고 수정
 */
export const usePatchApiCarsIdInventoryInventoryId = <
  TError = ErrorType<APIResponseUnauthorizedDto | APIResponseForbiddenDto>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof patchApiCarsIdInventoryInventoryId>>,
    TError,
    { id: string; inventoryId: string; data: UpdateCarInventoryDto },
    TContext
  >;
}): UseMutationResult<
  Awaited<ReturnType<typeof patchApiCarsIdInventoryInventoryId>>,
  TError,
  { id: string; inventoryId: string; data: UpdateCarInventoryDto },
  TContext
> => {
  const mutationOptions =
    getPatchApiCarsIdInventoryInventoryIdMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * [어드민] 차량 재고 삭제
 * @summary [어드민] 차량 재고 삭제
 */
export const deleteApiCarsIdInventoryInventoryId = (
  id: string,
  inventoryId: string,
) => {
  return customAxios<APIResponseBoolean>({
    url: `/api/cars/${id}/inventory/${inventoryId}`,
    method: "DELETE",
  });
};

export const getDeleteApiCarsIdInventoryInventoryIdMutationOptions = <
  TError = ErrorType<APIResponseUnauthorizedDto | APIResponseForbiddenDto>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof deleteApiCarsIdInventoryInventoryId>>,
    TError,
    { id: string; inventoryId: string },
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<typeof deleteApiCarsIdInventoryInventoryId>>,
  TError,
  { id: string; inventoryId: string },
  TContext
> => {
  const mutationKey = ["deleteApiCarsIdInventoryInventoryId"];
  const { mutation: mutationOptions } = options
    ? options.mutation &&
      "mutationKey" in options.mutation &&
      options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey } };

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof deleteApiCarsIdInventoryInventoryId>>,
    { id: string; inventoryId: string }
  > = (props) => {
    const { id, inventoryId } = props ?? {};

    return deleteApiCarsIdInventoryInventoryId(id, inventoryId);
  };

  return { mutationFn, ...mutationOptions };
};

export type DeleteApiCarsIdInventoryInventoryIdMutationResult = NonNullable<
  Awaited<ReturnType<typeof deleteApiCarsIdInventoryInventoryId>>
>;

export type DeleteApiCarsIdInventoryInventoryIdMutationError = ErrorType<
  APIResponseUnauthorizedDto | APIResponseForbiddenDto
>;

/**
 * @summary [어드민] 차량 재고 삭제
 */
export const useDeleteApiCarsIdInventoryInventoryId = <
  TError = ErrorType<APIResponseUnauthorizedDto | APIResponseForbiddenDto>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof deleteApiCarsIdInventoryInventoryId>>,
    TError,
    { id: string; inventoryId: string },
    TContext
  >;
}): UseMutationResult<
  Awaited<ReturnType<typeof deleteApiCarsIdInventoryInventoryId>>,
  TError,
  { id: string; inventoryId: string },
  TContext
> => {
  const mutationOptions =
    getDeleteApiCarsIdInventoryInventoryIdMutationOptions(options);

  return useMutation(mutationOptions);
};
