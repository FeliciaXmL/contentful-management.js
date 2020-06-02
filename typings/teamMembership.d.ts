import { MetaSys, MetaSysProps, DefaultElements, QueryOptions } from './generated/types/common-types'

export interface Options {
  teamId?: string
  query?: QueryOptions
}
export interface TeamMembershipProps {
  admin: boolean
  organizationMembershipId: string
}

export interface TeamMembership
  extends MetaSys<MetaSysProps>,
    TeamMembershipProps,
    DefaultElements<MetaSys<MetaSysProps> & TeamMembershipProps> {
  delete(): Promise<void>
  update(): Promise<TeamMembership>
}