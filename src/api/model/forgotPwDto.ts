/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * Vahana API
 * OpenAPI spec version: 1.0.0
 */

export type ForgotPwDto = {
  /** 아이디 | 카카오 아이디 */
  id?: string;
  /** 전화번호 */
  phone: string;
  /** 인증코드 */
  code: string;
  /** 새로운 비밀번호 */
  new_password: string;
};
