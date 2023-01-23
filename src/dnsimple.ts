import { getPreferenceValues } from "@raycast/api";

const { accessToken } = getPreferenceValues();

// No TS support: https://github.com/dnsimple/dnsimple-node/issues/153
const DnsimpleClient = require("dnsimple");
const client = DnsimpleClient({ accessToken });

type Account = {
  id: number;
  email: string;
  plan_identifier: string;
  created_at: string;
  updated_at: string;
};

type Domain = {
  id: number;
  account_id: number;
  registrant_id?: number;
  name: string;
  unicode_name: string;
  state: "hosted" | "registered" | "expired";
  auto_renew: boolean;
  private_whois: boolean;
  expires_on?: string;
  expires_at?: string;
  created_at: string;
  updated_at: string;
};

export { client };
export type { Account, Domain };