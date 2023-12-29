export class Contact {
  image!: string | undefined;
  name!: string;
  surname!: string;
  number!: string;
  mail!: string;
  address!: string;
  //   [key: string]: any;
  constructor(
    image = '',
    name = '',
    surname = '',
    number = '',
    mail = '',
    address = ''
  ) {
    this.image = image;
    this.name = name;
    this.surname = surname;
    this.number = number;
    this.mail = mail;
    this.address = address;
  }
}
