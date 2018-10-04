// @flow
export type Values = {
  label: string,
  value: string,
  primary: boolean,
};

export type Phone = Values;

export type Email = Values;

export type Person = {
  id: number,
  company_id: number,
  owner_id: {
    id: number,
    name: string,
    email: string,
    has_pic: boolean,
    pic_hash: string | string | null,
    active_flag: boolean,
    value: number,
  },
  org_id: {
    name: string,
    people_count: number,
    owner_id: number,
    address: string | null,
    cc_email: string,
    value: number,
  },
  name: string,
  first_name: string,
  last_name: string,
  open_deals_count: number,
  related_open_deals_count: number,
  closed_deals_count: number,
  related_closed_deals_count: number,
  participant_open_deals_count: number,
  participant_closed_deals_count: number,
  email_messages_count: number,
  activities_count: number,
  done_activities_count: number,
  undone_activities_count: number,
  reference_activities_count: number,
  files_count: number,
  notes_count: number,
  followers_count: number,
  won_deals_count: number,
  related_won_deals_count: number,
  lost_deals_count: number,
  related_lost_deals_count: number,
  active_flag: boolean,
  phone: Array<Phone>,
  email: Array<Email>,
  first_char: string,
  update_time: string,
  add_time: string,
  visible_to: string,
  picture_id: string | null,
  next_activity_date: string | null,
  next_activity_time: string | null,
  next_activity_id: string | null,
  last_activity_id: string | null,
  last_activity_date: string | null,
  last_incoming_mail_time: string | null,
  last_outgoing_mail_time: string | null,
  label: string | null,
  '679c097ebd9753555034faec27025a0105a7ecd7': string | null,    //custom field assistant
  '030afe8bdb9f4b19f74febafa2d5eaba05ad21de': string,           //custom field location
  d91f23abedf6a3dec70ebe7191eb55c590dc4c27: string,             //custom field groups
  aef882f746fafeba45f6456fedb2cece208d94a5: number,             //custom field order
  org_name: string,
  owner_name: string,
  cc_email: string,
};
