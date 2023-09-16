export type Address = {
  address: string;
};

export interface Session {
  expiresAt: string;
  id: string;
  addresses: Address[];
}

export interface SessionResponse {
  introduceSession: Session;
}
