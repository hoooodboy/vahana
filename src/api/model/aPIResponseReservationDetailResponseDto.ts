/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * Vahana API
 * OpenAPI spec version: 1.0.0
 */
import type { ReservationDetailResponseDto } from "./reservationDetailResponseDto";

export type APIResponseReservationDetailResponseDto = {
  result: ReservationDetailResponseDto;
  /** 응답 메시지 */
  message: string;
  /** 응답 상태 코드 */
  status: number;
  /** 에러 메시지 */
  err?: string;
};
