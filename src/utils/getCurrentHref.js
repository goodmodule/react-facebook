import canUseDOM from 'can-use-dom';

export default function getCurrentHref() {
  if (!canUseDOM) {
    return 'http://www.facebook.com';
  }

  return location.href;
}
