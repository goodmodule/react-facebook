import canUseDOM from 'can-use-dom';

export default function getCurrentHref() {
  if (!canUseDOM) {
    return 'https://www.facebook.com';
  }

  return location.href;
}
