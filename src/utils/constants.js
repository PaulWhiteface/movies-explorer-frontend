const EMAIL_REGEX =  "^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@([a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?.)*(aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$";
const NAME_REGEX = "^[A-Za-zА-Яа-яЁё /s -]+$";

const MORE_DECKTOP = 4;
const MORE_DECKTOP_TABLET = 3;
const MORE_TABLET = 2;
const MORE_MOBILE = 1;

export {
  EMAIL_REGEX,
  NAME_REGEX,
  MORE_DECKTOP,
  MORE_DECKTOP_TABLET,
  MORE_TABLET,
  MORE_MOBILE
}