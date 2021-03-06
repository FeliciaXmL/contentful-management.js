import { AxiosInstance } from 'axios'
import { freezeSys, toPlainObject } from 'contentful-sdk-core'
import cloneDeep from 'lodash/cloneDeep'
import enhanceWithMethods from '../enhance-with-methods'
import { wrapCollection } from '../common-utils'
import { DefaultElements, MetaSysProps } from '../common-types'

export type UserProps = {
  /**
   * System metadata
   */
  sys: MetaSysProps

  /**
   * First name of the user
   */
  firstName: string

  /**
   * Last name of the user
   */
  lastName: string

  /**
   * Url to the users avatar
   */
  avatarUrl: string

  /**
   * Email address of the user
   */
  email: string

  /**
   * Activation flag
   */
  activated: boolean

  /**
   * Number of sign ins
   */
  signInCount: number

  /**
   * User confirmation flag
   */
  confirmed: boolean
}

export interface User extends UserProps, DefaultElements<UserProps> {}

/**
 * @private
 * @param http - HTTP client instance
 * @param data - Raw data
 * @return Normalized user
 */
export function wrapUser(http: AxiosInstance, data: UserProps): User {
  const user = toPlainObject(cloneDeep(data))
  const userWithMethods = enhanceWithMethods(user, {})
  return freezeSys(userWithMethods)
}

/**
 * @private
 * @param http - HTTP client instance
 * @param data - Raw data collection
 * @return Normalized user collection
 */
export const wrapUserCollection = wrapCollection(wrapUser)
