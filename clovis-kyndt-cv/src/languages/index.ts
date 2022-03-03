import cn from './cn.yaml'
import fr from './fr.yaml'
import en from './en.yaml'

const mapLanguages: { [key: string]: any }= {
  'cn': cn,
  'fr': fr,
  'en': en
}

export function getLocale(): string {
  const path = window.location.pathname.length > 0 ? window.location.pathname.substring(1) : 'en'
  return mapLanguages[path] ? path : 'en'
}

export function getSection(): any {
  return mapLanguages[getLocale()]
}
