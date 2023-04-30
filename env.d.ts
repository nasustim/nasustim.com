/// <reference types="node" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly GA_MEASUREMENT_ID: string
  }
}
