/// <reference path="../.astro/types.d.ts" />
import type { Alpine as AlpineType } from 'alpinejs'
/// <reference types="astro/client" />
declare global {
  var Alpine: AlpineType
}
