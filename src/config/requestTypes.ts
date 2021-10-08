// Cadastro de usuarios

export interface User {
  fullName: string;
  email: string;
  nickname: string;
  birthday: Date;
  cpfCnpj: string;
}

export interface RegisterUser extends User {
  account: UserAccount;
}

export interface UserAccount {
  id: string;
  pass: string;
  checkPass: string;
}

export interface Response {
  httpStatusCode: string;
  message: string;
}

export interface RegisterUserErrorResponse extends Response {
  validationErrors: [
    {
      fieldName: string;
      message: string;
      stringrestrictionType: string;
    }
  ];
}

// Login de usuários

export interface Login {
  id: string;
  password: string;
}

export interface LoginSuccess {
  id: string;
  email: string;
  fullname: string;
  role: string;
  token: string;
}

// BUSCAR DADOS DO CLIENTE AUTENTICADO(LOGADO)

export interface AuthUser extends User {
  status: string;
  active: boolean;
  deleted: boolean;
  dateCreated: Date;
  lastUpdated: Date;
  _id: string;
}
