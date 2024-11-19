
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Cleaner
 * 
 */
export type Cleaner = $Result.DefaultSelection<Prisma.$CleanerPayload>
/**
 * Model Transport
 * 
 */
export type Transport = $Result.DefaultSelection<Prisma.$TransportPayload>
/**
 * Model Helper
 * 
 */
export type Helper = $Result.DefaultSelection<Prisma.$HelperPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Cleaners
 * const cleaners = await prisma.cleaner.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Cleaners
   * const cleaners = await prisma.cleaner.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.cleaner`: Exposes CRUD operations for the **Cleaner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cleaners
    * const cleaners = await prisma.cleaner.findMany()
    * ```
    */
  get cleaner(): Prisma.CleanerDelegate<ExtArgs>;

  /**
   * `prisma.transport`: Exposes CRUD operations for the **Transport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transports
    * const transports = await prisma.transport.findMany()
    * ```
    */
  get transport(): Prisma.TransportDelegate<ExtArgs>;

  /**
   * `prisma.helper`: Exposes CRUD operations for the **Helper** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Helpers
    * const helpers = await prisma.helper.findMany()
    * ```
    */
  get helper(): Prisma.HelperDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.16.1
   * Query Engine version: 34ace0eb2704183d2c05b60b52fba5c43c13f303
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Cleaner: 'Cleaner',
    Transport: 'Transport',
    Helper: 'Helper'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "cleaner" | "transport" | "helper"
      txIsolationLevel: never
    }
    model: {
      Cleaner: {
        payload: Prisma.$CleanerPayload<ExtArgs>
        fields: Prisma.CleanerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CleanerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CleanerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanerPayload>
          }
          findFirst: {
            args: Prisma.CleanerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CleanerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanerPayload>
          }
          findMany: {
            args: Prisma.CleanerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanerPayload>[]
          }
          create: {
            args: Prisma.CleanerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanerPayload>
          }
          createMany: {
            args: Prisma.CleanerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CleanerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanerPayload>
          }
          update: {
            args: Prisma.CleanerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanerPayload>
          }
          deleteMany: {
            args: Prisma.CleanerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CleanerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CleanerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleanerPayload>
          }
          aggregate: {
            args: Prisma.CleanerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCleaner>
          }
          groupBy: {
            args: Prisma.CleanerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CleanerGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.CleanerFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.CleanerAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.CleanerCountArgs<ExtArgs>
            result: $Utils.Optional<CleanerCountAggregateOutputType> | number
          }
        }
      }
      Transport: {
        payload: Prisma.$TransportPayload<ExtArgs>
        fields: Prisma.TransportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportPayload>
          }
          findFirst: {
            args: Prisma.TransportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportPayload>
          }
          findMany: {
            args: Prisma.TransportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportPayload>[]
          }
          create: {
            args: Prisma.TransportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportPayload>
          }
          createMany: {
            args: Prisma.TransportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TransportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportPayload>
          }
          update: {
            args: Prisma.TransportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportPayload>
          }
          deleteMany: {
            args: Prisma.TransportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TransportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportPayload>
          }
          aggregate: {
            args: Prisma.TransportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransport>
          }
          groupBy: {
            args: Prisma.TransportGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransportGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.TransportFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.TransportAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.TransportCountArgs<ExtArgs>
            result: $Utils.Optional<TransportCountAggregateOutputType> | number
          }
        }
      }
      Helper: {
        payload: Prisma.$HelperPayload<ExtArgs>
        fields: Prisma.HelperFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HelperFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HelperPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HelperFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HelperPayload>
          }
          findFirst: {
            args: Prisma.HelperFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HelperPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HelperFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HelperPayload>
          }
          findMany: {
            args: Prisma.HelperFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HelperPayload>[]
          }
          create: {
            args: Prisma.HelperCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HelperPayload>
          }
          createMany: {
            args: Prisma.HelperCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.HelperDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HelperPayload>
          }
          update: {
            args: Prisma.HelperUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HelperPayload>
          }
          deleteMany: {
            args: Prisma.HelperDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HelperUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HelperUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HelperPayload>
          }
          aggregate: {
            args: Prisma.HelperAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHelper>
          }
          groupBy: {
            args: Prisma.HelperGroupByArgs<ExtArgs>
            result: $Utils.Optional<HelperGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.HelperFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.HelperAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.HelperCountArgs<ExtArgs>
            result: $Utils.Optional<HelperCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Cleaner
   */

  export type AggregateCleaner = {
    _count: CleanerCountAggregateOutputType | null
    _avg: CleanerAvgAggregateOutputType | null
    _sum: CleanerSumAggregateOutputType | null
    _min: CleanerMinAggregateOutputType | null
    _max: CleanerMaxAggregateOutputType | null
  }

  export type CleanerAvgAggregateOutputType = {
    numberOFCleaners: number | null
  }

  export type CleanerSumAggregateOutputType = {
    numberOFCleaners: number | null
  }

  export type CleanerMinAggregateOutputType = {
    id: string | null
    role: string | null
    name: string | null
    phone: string | null
    email: string | null
    serviceType: string | null
    time: string | null
    date: Date | null
    numberOFCleaners: number | null
    locationSpace: string | null
    frequencyService: string | null
    specialRequirements: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CleanerMaxAggregateOutputType = {
    id: string | null
    role: string | null
    name: string | null
    phone: string | null
    email: string | null
    serviceType: string | null
    time: string | null
    date: Date | null
    numberOFCleaners: number | null
    locationSpace: string | null
    frequencyService: string | null
    specialRequirements: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CleanerCountAggregateOutputType = {
    id: number
    role: number
    name: number
    phone: number
    email: number
    serviceType: number
    time: number
    date: number
    numberOFCleaners: number
    locationSpace: number
    frequencyService: number
    specialRequirements: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CleanerAvgAggregateInputType = {
    numberOFCleaners?: true
  }

  export type CleanerSumAggregateInputType = {
    numberOFCleaners?: true
  }

  export type CleanerMinAggregateInputType = {
    id?: true
    role?: true
    name?: true
    phone?: true
    email?: true
    serviceType?: true
    time?: true
    date?: true
    numberOFCleaners?: true
    locationSpace?: true
    frequencyService?: true
    specialRequirements?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CleanerMaxAggregateInputType = {
    id?: true
    role?: true
    name?: true
    phone?: true
    email?: true
    serviceType?: true
    time?: true
    date?: true
    numberOFCleaners?: true
    locationSpace?: true
    frequencyService?: true
    specialRequirements?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CleanerCountAggregateInputType = {
    id?: true
    role?: true
    name?: true
    phone?: true
    email?: true
    serviceType?: true
    time?: true
    date?: true
    numberOFCleaners?: true
    locationSpace?: true
    frequencyService?: true
    specialRequirements?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CleanerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cleaner to aggregate.
     */
    where?: CleanerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cleaners to fetch.
     */
    orderBy?: CleanerOrderByWithRelationInput | CleanerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CleanerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cleaners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cleaners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cleaners
    **/
    _count?: true | CleanerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CleanerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CleanerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CleanerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CleanerMaxAggregateInputType
  }

  export type GetCleanerAggregateType<T extends CleanerAggregateArgs> = {
        [P in keyof T & keyof AggregateCleaner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCleaner[P]>
      : GetScalarType<T[P], AggregateCleaner[P]>
  }




  export type CleanerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CleanerWhereInput
    orderBy?: CleanerOrderByWithAggregationInput | CleanerOrderByWithAggregationInput[]
    by: CleanerScalarFieldEnum[] | CleanerScalarFieldEnum
    having?: CleanerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CleanerCountAggregateInputType | true
    _avg?: CleanerAvgAggregateInputType
    _sum?: CleanerSumAggregateInputType
    _min?: CleanerMinAggregateInputType
    _max?: CleanerMaxAggregateInputType
  }

  export type CleanerGroupByOutputType = {
    id: string
    role: string
    name: string
    phone: string
    email: string
    serviceType: string
    time: string
    date: Date
    numberOFCleaners: number
    locationSpace: string
    frequencyService: string | null
    specialRequirements: string | null
    createdAt: Date
    updatedAt: Date
    _count: CleanerCountAggregateOutputType | null
    _avg: CleanerAvgAggregateOutputType | null
    _sum: CleanerSumAggregateOutputType | null
    _min: CleanerMinAggregateOutputType | null
    _max: CleanerMaxAggregateOutputType | null
  }

  type GetCleanerGroupByPayload<T extends CleanerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CleanerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CleanerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CleanerGroupByOutputType[P]>
            : GetScalarType<T[P], CleanerGroupByOutputType[P]>
        }
      >
    >


  export type CleanerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    serviceType?: boolean
    time?: boolean
    date?: boolean
    numberOFCleaners?: boolean
    locationSpace?: boolean
    frequencyService?: boolean
    specialRequirements?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cleaner"]>


  export type CleanerSelectScalar = {
    id?: boolean
    role?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    serviceType?: boolean
    time?: boolean
    date?: boolean
    numberOFCleaners?: boolean
    locationSpace?: boolean
    frequencyService?: boolean
    specialRequirements?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $CleanerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cleaner"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      role: string
      name: string
      phone: string
      email: string
      serviceType: string
      time: string
      date: Date
      numberOFCleaners: number
      locationSpace: string
      frequencyService: string | null
      specialRequirements: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cleaner"]>
    composites: {}
  }

  type CleanerGetPayload<S extends boolean | null | undefined | CleanerDefaultArgs> = $Result.GetResult<Prisma.$CleanerPayload, S>

  type CleanerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CleanerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CleanerCountAggregateInputType | true
    }

  export interface CleanerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cleaner'], meta: { name: 'Cleaner' } }
    /**
     * Find zero or one Cleaner that matches the filter.
     * @param {CleanerFindUniqueArgs} args - Arguments to find a Cleaner
     * @example
     * // Get one Cleaner
     * const cleaner = await prisma.cleaner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CleanerFindUniqueArgs>(args: SelectSubset<T, CleanerFindUniqueArgs<ExtArgs>>): Prisma__CleanerClient<$Result.GetResult<Prisma.$CleanerPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Cleaner that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CleanerFindUniqueOrThrowArgs} args - Arguments to find a Cleaner
     * @example
     * // Get one Cleaner
     * const cleaner = await prisma.cleaner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CleanerFindUniqueOrThrowArgs>(args: SelectSubset<T, CleanerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CleanerClient<$Result.GetResult<Prisma.$CleanerPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Cleaner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CleanerFindFirstArgs} args - Arguments to find a Cleaner
     * @example
     * // Get one Cleaner
     * const cleaner = await prisma.cleaner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CleanerFindFirstArgs>(args?: SelectSubset<T, CleanerFindFirstArgs<ExtArgs>>): Prisma__CleanerClient<$Result.GetResult<Prisma.$CleanerPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Cleaner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CleanerFindFirstOrThrowArgs} args - Arguments to find a Cleaner
     * @example
     * // Get one Cleaner
     * const cleaner = await prisma.cleaner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CleanerFindFirstOrThrowArgs>(args?: SelectSubset<T, CleanerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CleanerClient<$Result.GetResult<Prisma.$CleanerPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Cleaners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CleanerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cleaners
     * const cleaners = await prisma.cleaner.findMany()
     * 
     * // Get first 10 Cleaners
     * const cleaners = await prisma.cleaner.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cleanerWithIdOnly = await prisma.cleaner.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CleanerFindManyArgs>(args?: SelectSubset<T, CleanerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CleanerPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Cleaner.
     * @param {CleanerCreateArgs} args - Arguments to create a Cleaner.
     * @example
     * // Create one Cleaner
     * const Cleaner = await prisma.cleaner.create({
     *   data: {
     *     // ... data to create a Cleaner
     *   }
     * })
     * 
     */
    create<T extends CleanerCreateArgs>(args: SelectSubset<T, CleanerCreateArgs<ExtArgs>>): Prisma__CleanerClient<$Result.GetResult<Prisma.$CleanerPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Cleaners.
     * @param {CleanerCreateManyArgs} args - Arguments to create many Cleaners.
     * @example
     * // Create many Cleaners
     * const cleaner = await prisma.cleaner.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CleanerCreateManyArgs>(args?: SelectSubset<T, CleanerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cleaner.
     * @param {CleanerDeleteArgs} args - Arguments to delete one Cleaner.
     * @example
     * // Delete one Cleaner
     * const Cleaner = await prisma.cleaner.delete({
     *   where: {
     *     // ... filter to delete one Cleaner
     *   }
     * })
     * 
     */
    delete<T extends CleanerDeleteArgs>(args: SelectSubset<T, CleanerDeleteArgs<ExtArgs>>): Prisma__CleanerClient<$Result.GetResult<Prisma.$CleanerPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Cleaner.
     * @param {CleanerUpdateArgs} args - Arguments to update one Cleaner.
     * @example
     * // Update one Cleaner
     * const cleaner = await prisma.cleaner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CleanerUpdateArgs>(args: SelectSubset<T, CleanerUpdateArgs<ExtArgs>>): Prisma__CleanerClient<$Result.GetResult<Prisma.$CleanerPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Cleaners.
     * @param {CleanerDeleteManyArgs} args - Arguments to filter Cleaners to delete.
     * @example
     * // Delete a few Cleaners
     * const { count } = await prisma.cleaner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CleanerDeleteManyArgs>(args?: SelectSubset<T, CleanerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cleaners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CleanerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cleaners
     * const cleaner = await prisma.cleaner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CleanerUpdateManyArgs>(args: SelectSubset<T, CleanerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cleaner.
     * @param {CleanerUpsertArgs} args - Arguments to update or create a Cleaner.
     * @example
     * // Update or create a Cleaner
     * const cleaner = await prisma.cleaner.upsert({
     *   create: {
     *     // ... data to create a Cleaner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cleaner we want to update
     *   }
     * })
     */
    upsert<T extends CleanerUpsertArgs>(args: SelectSubset<T, CleanerUpsertArgs<ExtArgs>>): Prisma__CleanerClient<$Result.GetResult<Prisma.$CleanerPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more Cleaners that matches the filter.
     * @param {CleanerFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const cleaner = await prisma.cleaner.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: CleanerFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Cleaner.
     * @param {CleanerAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const cleaner = await prisma.cleaner.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: CleanerAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Cleaners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CleanerCountArgs} args - Arguments to filter Cleaners to count.
     * @example
     * // Count the number of Cleaners
     * const count = await prisma.cleaner.count({
     *   where: {
     *     // ... the filter for the Cleaners we want to count
     *   }
     * })
    **/
    count<T extends CleanerCountArgs>(
      args?: Subset<T, CleanerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CleanerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cleaner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CleanerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CleanerAggregateArgs>(args: Subset<T, CleanerAggregateArgs>): Prisma.PrismaPromise<GetCleanerAggregateType<T>>

    /**
     * Group by Cleaner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CleanerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CleanerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CleanerGroupByArgs['orderBy'] }
        : { orderBy?: CleanerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CleanerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCleanerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cleaner model
   */
  readonly fields: CleanerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cleaner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CleanerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cleaner model
   */ 
  interface CleanerFieldRefs {
    readonly id: FieldRef<"Cleaner", 'String'>
    readonly role: FieldRef<"Cleaner", 'String'>
    readonly name: FieldRef<"Cleaner", 'String'>
    readonly phone: FieldRef<"Cleaner", 'String'>
    readonly email: FieldRef<"Cleaner", 'String'>
    readonly serviceType: FieldRef<"Cleaner", 'String'>
    readonly time: FieldRef<"Cleaner", 'String'>
    readonly date: FieldRef<"Cleaner", 'DateTime'>
    readonly numberOFCleaners: FieldRef<"Cleaner", 'Int'>
    readonly locationSpace: FieldRef<"Cleaner", 'String'>
    readonly frequencyService: FieldRef<"Cleaner", 'String'>
    readonly specialRequirements: FieldRef<"Cleaner", 'String'>
    readonly createdAt: FieldRef<"Cleaner", 'DateTime'>
    readonly updatedAt: FieldRef<"Cleaner", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cleaner findUnique
   */
  export type CleanerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cleaner
     */
    select?: CleanerSelect<ExtArgs> | null
    /**
     * Filter, which Cleaner to fetch.
     */
    where: CleanerWhereUniqueInput
  }

  /**
   * Cleaner findUniqueOrThrow
   */
  export type CleanerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cleaner
     */
    select?: CleanerSelect<ExtArgs> | null
    /**
     * Filter, which Cleaner to fetch.
     */
    where: CleanerWhereUniqueInput
  }

  /**
   * Cleaner findFirst
   */
  export type CleanerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cleaner
     */
    select?: CleanerSelect<ExtArgs> | null
    /**
     * Filter, which Cleaner to fetch.
     */
    where?: CleanerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cleaners to fetch.
     */
    orderBy?: CleanerOrderByWithRelationInput | CleanerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cleaners.
     */
    cursor?: CleanerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cleaners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cleaners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cleaners.
     */
    distinct?: CleanerScalarFieldEnum | CleanerScalarFieldEnum[]
  }

  /**
   * Cleaner findFirstOrThrow
   */
  export type CleanerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cleaner
     */
    select?: CleanerSelect<ExtArgs> | null
    /**
     * Filter, which Cleaner to fetch.
     */
    where?: CleanerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cleaners to fetch.
     */
    orderBy?: CleanerOrderByWithRelationInput | CleanerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cleaners.
     */
    cursor?: CleanerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cleaners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cleaners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cleaners.
     */
    distinct?: CleanerScalarFieldEnum | CleanerScalarFieldEnum[]
  }

  /**
   * Cleaner findMany
   */
  export type CleanerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cleaner
     */
    select?: CleanerSelect<ExtArgs> | null
    /**
     * Filter, which Cleaners to fetch.
     */
    where?: CleanerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cleaners to fetch.
     */
    orderBy?: CleanerOrderByWithRelationInput | CleanerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cleaners.
     */
    cursor?: CleanerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cleaners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cleaners.
     */
    skip?: number
    distinct?: CleanerScalarFieldEnum | CleanerScalarFieldEnum[]
  }

  /**
   * Cleaner create
   */
  export type CleanerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cleaner
     */
    select?: CleanerSelect<ExtArgs> | null
    /**
     * The data needed to create a Cleaner.
     */
    data: XOR<CleanerCreateInput, CleanerUncheckedCreateInput>
  }

  /**
   * Cleaner createMany
   */
  export type CleanerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cleaners.
     */
    data: CleanerCreateManyInput | CleanerCreateManyInput[]
  }

  /**
   * Cleaner update
   */
  export type CleanerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cleaner
     */
    select?: CleanerSelect<ExtArgs> | null
    /**
     * The data needed to update a Cleaner.
     */
    data: XOR<CleanerUpdateInput, CleanerUncheckedUpdateInput>
    /**
     * Choose, which Cleaner to update.
     */
    where: CleanerWhereUniqueInput
  }

  /**
   * Cleaner updateMany
   */
  export type CleanerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cleaners.
     */
    data: XOR<CleanerUpdateManyMutationInput, CleanerUncheckedUpdateManyInput>
    /**
     * Filter which Cleaners to update
     */
    where?: CleanerWhereInput
  }

  /**
   * Cleaner upsert
   */
  export type CleanerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cleaner
     */
    select?: CleanerSelect<ExtArgs> | null
    /**
     * The filter to search for the Cleaner to update in case it exists.
     */
    where: CleanerWhereUniqueInput
    /**
     * In case the Cleaner found by the `where` argument doesn't exist, create a new Cleaner with this data.
     */
    create: XOR<CleanerCreateInput, CleanerUncheckedCreateInput>
    /**
     * In case the Cleaner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CleanerUpdateInput, CleanerUncheckedUpdateInput>
  }

  /**
   * Cleaner delete
   */
  export type CleanerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cleaner
     */
    select?: CleanerSelect<ExtArgs> | null
    /**
     * Filter which Cleaner to delete.
     */
    where: CleanerWhereUniqueInput
  }

  /**
   * Cleaner deleteMany
   */
  export type CleanerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cleaners to delete
     */
    where?: CleanerWhereInput
  }

  /**
   * Cleaner findRaw
   */
  export type CleanerFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Cleaner aggregateRaw
   */
  export type CleanerAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Cleaner without action
   */
  export type CleanerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cleaner
     */
    select?: CleanerSelect<ExtArgs> | null
  }


  /**
   * Model Transport
   */

  export type AggregateTransport = {
    _count: TransportCountAggregateOutputType | null
    _min: TransportMinAggregateOutputType | null
    _max: TransportMaxAggregateOutputType | null
  }

  export type TransportMinAggregateOutputType = {
    id: string | null
    role: string | null
    name: string | null
    phone: string | null
    email: string | null
    serviceType: string | null
    time: string | null
    date: Date | null
    locationFrom: string | null
    locationTo: string | null
    frequencyService: string | null
    specialRequirements: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransportMaxAggregateOutputType = {
    id: string | null
    role: string | null
    name: string | null
    phone: string | null
    email: string | null
    serviceType: string | null
    time: string | null
    date: Date | null
    locationFrom: string | null
    locationTo: string | null
    frequencyService: string | null
    specialRequirements: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransportCountAggregateOutputType = {
    id: number
    role: number
    name: number
    phone: number
    email: number
    serviceType: number
    time: number
    date: number
    locationFrom: number
    locationTo: number
    frequencyService: number
    specialRequirements: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TransportMinAggregateInputType = {
    id?: true
    role?: true
    name?: true
    phone?: true
    email?: true
    serviceType?: true
    time?: true
    date?: true
    locationFrom?: true
    locationTo?: true
    frequencyService?: true
    specialRequirements?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransportMaxAggregateInputType = {
    id?: true
    role?: true
    name?: true
    phone?: true
    email?: true
    serviceType?: true
    time?: true
    date?: true
    locationFrom?: true
    locationTo?: true
    frequencyService?: true
    specialRequirements?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransportCountAggregateInputType = {
    id?: true
    role?: true
    name?: true
    phone?: true
    email?: true
    serviceType?: true
    time?: true
    date?: true
    locationFrom?: true
    locationTo?: true
    frequencyService?: true
    specialRequirements?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TransportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transport to aggregate.
     */
    where?: TransportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transports to fetch.
     */
    orderBy?: TransportOrderByWithRelationInput | TransportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transports
    **/
    _count?: true | TransportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransportMaxAggregateInputType
  }

  export type GetTransportAggregateType<T extends TransportAggregateArgs> = {
        [P in keyof T & keyof AggregateTransport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransport[P]>
      : GetScalarType<T[P], AggregateTransport[P]>
  }




  export type TransportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransportWhereInput
    orderBy?: TransportOrderByWithAggregationInput | TransportOrderByWithAggregationInput[]
    by: TransportScalarFieldEnum[] | TransportScalarFieldEnum
    having?: TransportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransportCountAggregateInputType | true
    _min?: TransportMinAggregateInputType
    _max?: TransportMaxAggregateInputType
  }

  export type TransportGroupByOutputType = {
    id: string
    role: string
    name: string
    phone: string
    email: string
    serviceType: string
    time: string
    date: Date
    locationFrom: string
    locationTo: string
    frequencyService: string | null
    specialRequirements: string | null
    createdAt: Date
    updatedAt: Date
    _count: TransportCountAggregateOutputType | null
    _min: TransportMinAggregateOutputType | null
    _max: TransportMaxAggregateOutputType | null
  }

  type GetTransportGroupByPayload<T extends TransportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransportGroupByOutputType[P]>
            : GetScalarType<T[P], TransportGroupByOutputType[P]>
        }
      >
    >


  export type TransportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    serviceType?: boolean
    time?: boolean
    date?: boolean
    locationFrom?: boolean
    locationTo?: boolean
    frequencyService?: boolean
    specialRequirements?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["transport"]>


  export type TransportSelectScalar = {
    id?: boolean
    role?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    serviceType?: boolean
    time?: boolean
    date?: boolean
    locationFrom?: boolean
    locationTo?: boolean
    frequencyService?: boolean
    specialRequirements?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $TransportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transport"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      role: string
      name: string
      phone: string
      email: string
      serviceType: string
      time: string
      date: Date
      locationFrom: string
      locationTo: string
      frequencyService: string | null
      specialRequirements: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["transport"]>
    composites: {}
  }

  type TransportGetPayload<S extends boolean | null | undefined | TransportDefaultArgs> = $Result.GetResult<Prisma.$TransportPayload, S>

  type TransportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TransportFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TransportCountAggregateInputType | true
    }

  export interface TransportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transport'], meta: { name: 'Transport' } }
    /**
     * Find zero or one Transport that matches the filter.
     * @param {TransportFindUniqueArgs} args - Arguments to find a Transport
     * @example
     * // Get one Transport
     * const transport = await prisma.transport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransportFindUniqueArgs>(args: SelectSubset<T, TransportFindUniqueArgs<ExtArgs>>): Prisma__TransportClient<$Result.GetResult<Prisma.$TransportPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Transport that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TransportFindUniqueOrThrowArgs} args - Arguments to find a Transport
     * @example
     * // Get one Transport
     * const transport = await prisma.transport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransportFindUniqueOrThrowArgs>(args: SelectSubset<T, TransportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransportClient<$Result.GetResult<Prisma.$TransportPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Transport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportFindFirstArgs} args - Arguments to find a Transport
     * @example
     * // Get one Transport
     * const transport = await prisma.transport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransportFindFirstArgs>(args?: SelectSubset<T, TransportFindFirstArgs<ExtArgs>>): Prisma__TransportClient<$Result.GetResult<Prisma.$TransportPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Transport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportFindFirstOrThrowArgs} args - Arguments to find a Transport
     * @example
     * // Get one Transport
     * const transport = await prisma.transport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransportFindFirstOrThrowArgs>(args?: SelectSubset<T, TransportFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransportClient<$Result.GetResult<Prisma.$TransportPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Transports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transports
     * const transports = await prisma.transport.findMany()
     * 
     * // Get first 10 Transports
     * const transports = await prisma.transport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transportWithIdOnly = await prisma.transport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransportFindManyArgs>(args?: SelectSubset<T, TransportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransportPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Transport.
     * @param {TransportCreateArgs} args - Arguments to create a Transport.
     * @example
     * // Create one Transport
     * const Transport = await prisma.transport.create({
     *   data: {
     *     // ... data to create a Transport
     *   }
     * })
     * 
     */
    create<T extends TransportCreateArgs>(args: SelectSubset<T, TransportCreateArgs<ExtArgs>>): Prisma__TransportClient<$Result.GetResult<Prisma.$TransportPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Transports.
     * @param {TransportCreateManyArgs} args - Arguments to create many Transports.
     * @example
     * // Create many Transports
     * const transport = await prisma.transport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransportCreateManyArgs>(args?: SelectSubset<T, TransportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Transport.
     * @param {TransportDeleteArgs} args - Arguments to delete one Transport.
     * @example
     * // Delete one Transport
     * const Transport = await prisma.transport.delete({
     *   where: {
     *     // ... filter to delete one Transport
     *   }
     * })
     * 
     */
    delete<T extends TransportDeleteArgs>(args: SelectSubset<T, TransportDeleteArgs<ExtArgs>>): Prisma__TransportClient<$Result.GetResult<Prisma.$TransportPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Transport.
     * @param {TransportUpdateArgs} args - Arguments to update one Transport.
     * @example
     * // Update one Transport
     * const transport = await prisma.transport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransportUpdateArgs>(args: SelectSubset<T, TransportUpdateArgs<ExtArgs>>): Prisma__TransportClient<$Result.GetResult<Prisma.$TransportPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Transports.
     * @param {TransportDeleteManyArgs} args - Arguments to filter Transports to delete.
     * @example
     * // Delete a few Transports
     * const { count } = await prisma.transport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransportDeleteManyArgs>(args?: SelectSubset<T, TransportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transports
     * const transport = await prisma.transport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransportUpdateManyArgs>(args: SelectSubset<T, TransportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Transport.
     * @param {TransportUpsertArgs} args - Arguments to update or create a Transport.
     * @example
     * // Update or create a Transport
     * const transport = await prisma.transport.upsert({
     *   create: {
     *     // ... data to create a Transport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transport we want to update
     *   }
     * })
     */
    upsert<T extends TransportUpsertArgs>(args: SelectSubset<T, TransportUpsertArgs<ExtArgs>>): Prisma__TransportClient<$Result.GetResult<Prisma.$TransportPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more Transports that matches the filter.
     * @param {TransportFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const transport = await prisma.transport.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: TransportFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Transport.
     * @param {TransportAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const transport = await prisma.transport.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: TransportAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Transports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportCountArgs} args - Arguments to filter Transports to count.
     * @example
     * // Count the number of Transports
     * const count = await prisma.transport.count({
     *   where: {
     *     // ... the filter for the Transports we want to count
     *   }
     * })
    **/
    count<T extends TransportCountArgs>(
      args?: Subset<T, TransportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransportAggregateArgs>(args: Subset<T, TransportAggregateArgs>): Prisma.PrismaPromise<GetTransportAggregateType<T>>

    /**
     * Group by Transport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransportGroupByArgs['orderBy'] }
        : { orderBy?: TransportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transport model
   */
  readonly fields: TransportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Transport model
   */ 
  interface TransportFieldRefs {
    readonly id: FieldRef<"Transport", 'String'>
    readonly role: FieldRef<"Transport", 'String'>
    readonly name: FieldRef<"Transport", 'String'>
    readonly phone: FieldRef<"Transport", 'String'>
    readonly email: FieldRef<"Transport", 'String'>
    readonly serviceType: FieldRef<"Transport", 'String'>
    readonly time: FieldRef<"Transport", 'String'>
    readonly date: FieldRef<"Transport", 'DateTime'>
    readonly locationFrom: FieldRef<"Transport", 'String'>
    readonly locationTo: FieldRef<"Transport", 'String'>
    readonly frequencyService: FieldRef<"Transport", 'String'>
    readonly specialRequirements: FieldRef<"Transport", 'String'>
    readonly createdAt: FieldRef<"Transport", 'DateTime'>
    readonly updatedAt: FieldRef<"Transport", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transport findUnique
   */
  export type TransportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transport
     */
    select?: TransportSelect<ExtArgs> | null
    /**
     * Filter, which Transport to fetch.
     */
    where: TransportWhereUniqueInput
  }

  /**
   * Transport findUniqueOrThrow
   */
  export type TransportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transport
     */
    select?: TransportSelect<ExtArgs> | null
    /**
     * Filter, which Transport to fetch.
     */
    where: TransportWhereUniqueInput
  }

  /**
   * Transport findFirst
   */
  export type TransportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transport
     */
    select?: TransportSelect<ExtArgs> | null
    /**
     * Filter, which Transport to fetch.
     */
    where?: TransportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transports to fetch.
     */
    orderBy?: TransportOrderByWithRelationInput | TransportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transports.
     */
    cursor?: TransportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transports.
     */
    distinct?: TransportScalarFieldEnum | TransportScalarFieldEnum[]
  }

  /**
   * Transport findFirstOrThrow
   */
  export type TransportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transport
     */
    select?: TransportSelect<ExtArgs> | null
    /**
     * Filter, which Transport to fetch.
     */
    where?: TransportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transports to fetch.
     */
    orderBy?: TransportOrderByWithRelationInput | TransportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transports.
     */
    cursor?: TransportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transports.
     */
    distinct?: TransportScalarFieldEnum | TransportScalarFieldEnum[]
  }

  /**
   * Transport findMany
   */
  export type TransportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transport
     */
    select?: TransportSelect<ExtArgs> | null
    /**
     * Filter, which Transports to fetch.
     */
    where?: TransportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transports to fetch.
     */
    orderBy?: TransportOrderByWithRelationInput | TransportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transports.
     */
    cursor?: TransportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transports.
     */
    skip?: number
    distinct?: TransportScalarFieldEnum | TransportScalarFieldEnum[]
  }

  /**
   * Transport create
   */
  export type TransportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transport
     */
    select?: TransportSelect<ExtArgs> | null
    /**
     * The data needed to create a Transport.
     */
    data: XOR<TransportCreateInput, TransportUncheckedCreateInput>
  }

  /**
   * Transport createMany
   */
  export type TransportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transports.
     */
    data: TransportCreateManyInput | TransportCreateManyInput[]
  }

  /**
   * Transport update
   */
  export type TransportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transport
     */
    select?: TransportSelect<ExtArgs> | null
    /**
     * The data needed to update a Transport.
     */
    data: XOR<TransportUpdateInput, TransportUncheckedUpdateInput>
    /**
     * Choose, which Transport to update.
     */
    where: TransportWhereUniqueInput
  }

  /**
   * Transport updateMany
   */
  export type TransportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transports.
     */
    data: XOR<TransportUpdateManyMutationInput, TransportUncheckedUpdateManyInput>
    /**
     * Filter which Transports to update
     */
    where?: TransportWhereInput
  }

  /**
   * Transport upsert
   */
  export type TransportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transport
     */
    select?: TransportSelect<ExtArgs> | null
    /**
     * The filter to search for the Transport to update in case it exists.
     */
    where: TransportWhereUniqueInput
    /**
     * In case the Transport found by the `where` argument doesn't exist, create a new Transport with this data.
     */
    create: XOR<TransportCreateInput, TransportUncheckedCreateInput>
    /**
     * In case the Transport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransportUpdateInput, TransportUncheckedUpdateInput>
  }

  /**
   * Transport delete
   */
  export type TransportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transport
     */
    select?: TransportSelect<ExtArgs> | null
    /**
     * Filter which Transport to delete.
     */
    where: TransportWhereUniqueInput
  }

  /**
   * Transport deleteMany
   */
  export type TransportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transports to delete
     */
    where?: TransportWhereInput
  }

  /**
   * Transport findRaw
   */
  export type TransportFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Transport aggregateRaw
   */
  export type TransportAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Transport without action
   */
  export type TransportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transport
     */
    select?: TransportSelect<ExtArgs> | null
  }


  /**
   * Model Helper
   */

  export type AggregateHelper = {
    _count: HelperCountAggregateOutputType | null
    _min: HelperMinAggregateOutputType | null
    _max: HelperMaxAggregateOutputType | null
  }

  export type HelperMinAggregateOutputType = {
    id: string | null
    role: string | null
    name: string | null
    phone: string | null
    email: string | null
    serviceType: string | null
    time: string | null
    date: Date | null
    location: string | null
    frequencyService: string | null
    specialRequirements: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HelperMaxAggregateOutputType = {
    id: string | null
    role: string | null
    name: string | null
    phone: string | null
    email: string | null
    serviceType: string | null
    time: string | null
    date: Date | null
    location: string | null
    frequencyService: string | null
    specialRequirements: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HelperCountAggregateOutputType = {
    id: number
    role: number
    name: number
    phone: number
    email: number
    serviceType: number
    time: number
    date: number
    location: number
    frequencyService: number
    specialRequirements: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HelperMinAggregateInputType = {
    id?: true
    role?: true
    name?: true
    phone?: true
    email?: true
    serviceType?: true
    time?: true
    date?: true
    location?: true
    frequencyService?: true
    specialRequirements?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HelperMaxAggregateInputType = {
    id?: true
    role?: true
    name?: true
    phone?: true
    email?: true
    serviceType?: true
    time?: true
    date?: true
    location?: true
    frequencyService?: true
    specialRequirements?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HelperCountAggregateInputType = {
    id?: true
    role?: true
    name?: true
    phone?: true
    email?: true
    serviceType?: true
    time?: true
    date?: true
    location?: true
    frequencyService?: true
    specialRequirements?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HelperAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Helper to aggregate.
     */
    where?: HelperWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Helpers to fetch.
     */
    orderBy?: HelperOrderByWithRelationInput | HelperOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HelperWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Helpers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Helpers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Helpers
    **/
    _count?: true | HelperCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HelperMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HelperMaxAggregateInputType
  }

  export type GetHelperAggregateType<T extends HelperAggregateArgs> = {
        [P in keyof T & keyof AggregateHelper]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHelper[P]>
      : GetScalarType<T[P], AggregateHelper[P]>
  }




  export type HelperGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HelperWhereInput
    orderBy?: HelperOrderByWithAggregationInput | HelperOrderByWithAggregationInput[]
    by: HelperScalarFieldEnum[] | HelperScalarFieldEnum
    having?: HelperScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HelperCountAggregateInputType | true
    _min?: HelperMinAggregateInputType
    _max?: HelperMaxAggregateInputType
  }

  export type HelperGroupByOutputType = {
    id: string
    role: string
    name: string
    phone: string
    email: string
    serviceType: string
    time: string
    date: Date
    location: string
    frequencyService: string | null
    specialRequirements: string | null
    createdAt: Date
    updatedAt: Date
    _count: HelperCountAggregateOutputType | null
    _min: HelperMinAggregateOutputType | null
    _max: HelperMaxAggregateOutputType | null
  }

  type GetHelperGroupByPayload<T extends HelperGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HelperGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HelperGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HelperGroupByOutputType[P]>
            : GetScalarType<T[P], HelperGroupByOutputType[P]>
        }
      >
    >


  export type HelperSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    serviceType?: boolean
    time?: boolean
    date?: boolean
    location?: boolean
    frequencyService?: boolean
    specialRequirements?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["helper"]>


  export type HelperSelectScalar = {
    id?: boolean
    role?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    serviceType?: boolean
    time?: boolean
    date?: boolean
    location?: boolean
    frequencyService?: boolean
    specialRequirements?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $HelperPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Helper"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      role: string
      name: string
      phone: string
      email: string
      serviceType: string
      time: string
      date: Date
      location: string
      frequencyService: string | null
      specialRequirements: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["helper"]>
    composites: {}
  }

  type HelperGetPayload<S extends boolean | null | undefined | HelperDefaultArgs> = $Result.GetResult<Prisma.$HelperPayload, S>

  type HelperCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<HelperFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: HelperCountAggregateInputType | true
    }

  export interface HelperDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Helper'], meta: { name: 'Helper' } }
    /**
     * Find zero or one Helper that matches the filter.
     * @param {HelperFindUniqueArgs} args - Arguments to find a Helper
     * @example
     * // Get one Helper
     * const helper = await prisma.helper.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HelperFindUniqueArgs>(args: SelectSubset<T, HelperFindUniqueArgs<ExtArgs>>): Prisma__HelperClient<$Result.GetResult<Prisma.$HelperPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Helper that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {HelperFindUniqueOrThrowArgs} args - Arguments to find a Helper
     * @example
     * // Get one Helper
     * const helper = await prisma.helper.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HelperFindUniqueOrThrowArgs>(args: SelectSubset<T, HelperFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HelperClient<$Result.GetResult<Prisma.$HelperPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Helper that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HelperFindFirstArgs} args - Arguments to find a Helper
     * @example
     * // Get one Helper
     * const helper = await prisma.helper.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HelperFindFirstArgs>(args?: SelectSubset<T, HelperFindFirstArgs<ExtArgs>>): Prisma__HelperClient<$Result.GetResult<Prisma.$HelperPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Helper that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HelperFindFirstOrThrowArgs} args - Arguments to find a Helper
     * @example
     * // Get one Helper
     * const helper = await prisma.helper.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HelperFindFirstOrThrowArgs>(args?: SelectSubset<T, HelperFindFirstOrThrowArgs<ExtArgs>>): Prisma__HelperClient<$Result.GetResult<Prisma.$HelperPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Helpers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HelperFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Helpers
     * const helpers = await prisma.helper.findMany()
     * 
     * // Get first 10 Helpers
     * const helpers = await prisma.helper.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const helperWithIdOnly = await prisma.helper.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HelperFindManyArgs>(args?: SelectSubset<T, HelperFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HelperPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Helper.
     * @param {HelperCreateArgs} args - Arguments to create a Helper.
     * @example
     * // Create one Helper
     * const Helper = await prisma.helper.create({
     *   data: {
     *     // ... data to create a Helper
     *   }
     * })
     * 
     */
    create<T extends HelperCreateArgs>(args: SelectSubset<T, HelperCreateArgs<ExtArgs>>): Prisma__HelperClient<$Result.GetResult<Prisma.$HelperPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Helpers.
     * @param {HelperCreateManyArgs} args - Arguments to create many Helpers.
     * @example
     * // Create many Helpers
     * const helper = await prisma.helper.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HelperCreateManyArgs>(args?: SelectSubset<T, HelperCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Helper.
     * @param {HelperDeleteArgs} args - Arguments to delete one Helper.
     * @example
     * // Delete one Helper
     * const Helper = await prisma.helper.delete({
     *   where: {
     *     // ... filter to delete one Helper
     *   }
     * })
     * 
     */
    delete<T extends HelperDeleteArgs>(args: SelectSubset<T, HelperDeleteArgs<ExtArgs>>): Prisma__HelperClient<$Result.GetResult<Prisma.$HelperPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Helper.
     * @param {HelperUpdateArgs} args - Arguments to update one Helper.
     * @example
     * // Update one Helper
     * const helper = await prisma.helper.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HelperUpdateArgs>(args: SelectSubset<T, HelperUpdateArgs<ExtArgs>>): Prisma__HelperClient<$Result.GetResult<Prisma.$HelperPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Helpers.
     * @param {HelperDeleteManyArgs} args - Arguments to filter Helpers to delete.
     * @example
     * // Delete a few Helpers
     * const { count } = await prisma.helper.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HelperDeleteManyArgs>(args?: SelectSubset<T, HelperDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Helpers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HelperUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Helpers
     * const helper = await prisma.helper.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HelperUpdateManyArgs>(args: SelectSubset<T, HelperUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Helper.
     * @param {HelperUpsertArgs} args - Arguments to update or create a Helper.
     * @example
     * // Update or create a Helper
     * const helper = await prisma.helper.upsert({
     *   create: {
     *     // ... data to create a Helper
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Helper we want to update
     *   }
     * })
     */
    upsert<T extends HelperUpsertArgs>(args: SelectSubset<T, HelperUpsertArgs<ExtArgs>>): Prisma__HelperClient<$Result.GetResult<Prisma.$HelperPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more Helpers that matches the filter.
     * @param {HelperFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const helper = await prisma.helper.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: HelperFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Helper.
     * @param {HelperAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const helper = await prisma.helper.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: HelperAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Helpers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HelperCountArgs} args - Arguments to filter Helpers to count.
     * @example
     * // Count the number of Helpers
     * const count = await prisma.helper.count({
     *   where: {
     *     // ... the filter for the Helpers we want to count
     *   }
     * })
    **/
    count<T extends HelperCountArgs>(
      args?: Subset<T, HelperCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HelperCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Helper.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HelperAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HelperAggregateArgs>(args: Subset<T, HelperAggregateArgs>): Prisma.PrismaPromise<GetHelperAggregateType<T>>

    /**
     * Group by Helper.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HelperGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HelperGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HelperGroupByArgs['orderBy'] }
        : { orderBy?: HelperGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HelperGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHelperGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Helper model
   */
  readonly fields: HelperFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Helper.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HelperClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Helper model
   */ 
  interface HelperFieldRefs {
    readonly id: FieldRef<"Helper", 'String'>
    readonly role: FieldRef<"Helper", 'String'>
    readonly name: FieldRef<"Helper", 'String'>
    readonly phone: FieldRef<"Helper", 'String'>
    readonly email: FieldRef<"Helper", 'String'>
    readonly serviceType: FieldRef<"Helper", 'String'>
    readonly time: FieldRef<"Helper", 'String'>
    readonly date: FieldRef<"Helper", 'DateTime'>
    readonly location: FieldRef<"Helper", 'String'>
    readonly frequencyService: FieldRef<"Helper", 'String'>
    readonly specialRequirements: FieldRef<"Helper", 'String'>
    readonly createdAt: FieldRef<"Helper", 'DateTime'>
    readonly updatedAt: FieldRef<"Helper", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Helper findUnique
   */
  export type HelperFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Helper
     */
    select?: HelperSelect<ExtArgs> | null
    /**
     * Filter, which Helper to fetch.
     */
    where: HelperWhereUniqueInput
  }

  /**
   * Helper findUniqueOrThrow
   */
  export type HelperFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Helper
     */
    select?: HelperSelect<ExtArgs> | null
    /**
     * Filter, which Helper to fetch.
     */
    where: HelperWhereUniqueInput
  }

  /**
   * Helper findFirst
   */
  export type HelperFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Helper
     */
    select?: HelperSelect<ExtArgs> | null
    /**
     * Filter, which Helper to fetch.
     */
    where?: HelperWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Helpers to fetch.
     */
    orderBy?: HelperOrderByWithRelationInput | HelperOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Helpers.
     */
    cursor?: HelperWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Helpers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Helpers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Helpers.
     */
    distinct?: HelperScalarFieldEnum | HelperScalarFieldEnum[]
  }

  /**
   * Helper findFirstOrThrow
   */
  export type HelperFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Helper
     */
    select?: HelperSelect<ExtArgs> | null
    /**
     * Filter, which Helper to fetch.
     */
    where?: HelperWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Helpers to fetch.
     */
    orderBy?: HelperOrderByWithRelationInput | HelperOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Helpers.
     */
    cursor?: HelperWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Helpers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Helpers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Helpers.
     */
    distinct?: HelperScalarFieldEnum | HelperScalarFieldEnum[]
  }

  /**
   * Helper findMany
   */
  export type HelperFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Helper
     */
    select?: HelperSelect<ExtArgs> | null
    /**
     * Filter, which Helpers to fetch.
     */
    where?: HelperWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Helpers to fetch.
     */
    orderBy?: HelperOrderByWithRelationInput | HelperOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Helpers.
     */
    cursor?: HelperWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Helpers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Helpers.
     */
    skip?: number
    distinct?: HelperScalarFieldEnum | HelperScalarFieldEnum[]
  }

  /**
   * Helper create
   */
  export type HelperCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Helper
     */
    select?: HelperSelect<ExtArgs> | null
    /**
     * The data needed to create a Helper.
     */
    data: XOR<HelperCreateInput, HelperUncheckedCreateInput>
  }

  /**
   * Helper createMany
   */
  export type HelperCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Helpers.
     */
    data: HelperCreateManyInput | HelperCreateManyInput[]
  }

  /**
   * Helper update
   */
  export type HelperUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Helper
     */
    select?: HelperSelect<ExtArgs> | null
    /**
     * The data needed to update a Helper.
     */
    data: XOR<HelperUpdateInput, HelperUncheckedUpdateInput>
    /**
     * Choose, which Helper to update.
     */
    where: HelperWhereUniqueInput
  }

  /**
   * Helper updateMany
   */
  export type HelperUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Helpers.
     */
    data: XOR<HelperUpdateManyMutationInput, HelperUncheckedUpdateManyInput>
    /**
     * Filter which Helpers to update
     */
    where?: HelperWhereInput
  }

  /**
   * Helper upsert
   */
  export type HelperUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Helper
     */
    select?: HelperSelect<ExtArgs> | null
    /**
     * The filter to search for the Helper to update in case it exists.
     */
    where: HelperWhereUniqueInput
    /**
     * In case the Helper found by the `where` argument doesn't exist, create a new Helper with this data.
     */
    create: XOR<HelperCreateInput, HelperUncheckedCreateInput>
    /**
     * In case the Helper was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HelperUpdateInput, HelperUncheckedUpdateInput>
  }

  /**
   * Helper delete
   */
  export type HelperDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Helper
     */
    select?: HelperSelect<ExtArgs> | null
    /**
     * Filter which Helper to delete.
     */
    where: HelperWhereUniqueInput
  }

  /**
   * Helper deleteMany
   */
  export type HelperDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Helpers to delete
     */
    where?: HelperWhereInput
  }

  /**
   * Helper findRaw
   */
  export type HelperFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Helper aggregateRaw
   */
  export type HelperAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Helper without action
   */
  export type HelperDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Helper
     */
    select?: HelperSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const CleanerScalarFieldEnum: {
    id: 'id',
    role: 'role',
    name: 'name',
    phone: 'phone',
    email: 'email',
    serviceType: 'serviceType',
    time: 'time',
    date: 'date',
    numberOFCleaners: 'numberOFCleaners',
    locationSpace: 'locationSpace',
    frequencyService: 'frequencyService',
    specialRequirements: 'specialRequirements',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CleanerScalarFieldEnum = (typeof CleanerScalarFieldEnum)[keyof typeof CleanerScalarFieldEnum]


  export const TransportScalarFieldEnum: {
    id: 'id',
    role: 'role',
    name: 'name',
    phone: 'phone',
    email: 'email',
    serviceType: 'serviceType',
    time: 'time',
    date: 'date',
    locationFrom: 'locationFrom',
    locationTo: 'locationTo',
    frequencyService: 'frequencyService',
    specialRequirements: 'specialRequirements',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TransportScalarFieldEnum = (typeof TransportScalarFieldEnum)[keyof typeof TransportScalarFieldEnum]


  export const HelperScalarFieldEnum: {
    id: 'id',
    role: 'role',
    name: 'name',
    phone: 'phone',
    email: 'email',
    serviceType: 'serviceType',
    time: 'time',
    date: 'date',
    location: 'location',
    frequencyService: 'frequencyService',
    specialRequirements: 'specialRequirements',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HelperScalarFieldEnum = (typeof HelperScalarFieldEnum)[keyof typeof HelperScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CleanerWhereInput = {
    AND?: CleanerWhereInput | CleanerWhereInput[]
    OR?: CleanerWhereInput[]
    NOT?: CleanerWhereInput | CleanerWhereInput[]
    id?: StringFilter<"Cleaner"> | string
    role?: StringFilter<"Cleaner"> | string
    name?: StringFilter<"Cleaner"> | string
    phone?: StringFilter<"Cleaner"> | string
    email?: StringFilter<"Cleaner"> | string
    serviceType?: StringFilter<"Cleaner"> | string
    time?: StringFilter<"Cleaner"> | string
    date?: DateTimeFilter<"Cleaner"> | Date | string
    numberOFCleaners?: IntFilter<"Cleaner"> | number
    locationSpace?: StringFilter<"Cleaner"> | string
    frequencyService?: StringNullableFilter<"Cleaner"> | string | null
    specialRequirements?: StringNullableFilter<"Cleaner"> | string | null
    createdAt?: DateTimeFilter<"Cleaner"> | Date | string
    updatedAt?: DateTimeFilter<"Cleaner"> | Date | string
  }

  export type CleanerOrderByWithRelationInput = {
    id?: SortOrder
    role?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    serviceType?: SortOrder
    time?: SortOrder
    date?: SortOrder
    numberOFCleaners?: SortOrder
    locationSpace?: SortOrder
    frequencyService?: SortOrder
    specialRequirements?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CleanerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CleanerWhereInput | CleanerWhereInput[]
    OR?: CleanerWhereInput[]
    NOT?: CleanerWhereInput | CleanerWhereInput[]
    role?: StringFilter<"Cleaner"> | string
    name?: StringFilter<"Cleaner"> | string
    phone?: StringFilter<"Cleaner"> | string
    email?: StringFilter<"Cleaner"> | string
    serviceType?: StringFilter<"Cleaner"> | string
    time?: StringFilter<"Cleaner"> | string
    date?: DateTimeFilter<"Cleaner"> | Date | string
    numberOFCleaners?: IntFilter<"Cleaner"> | number
    locationSpace?: StringFilter<"Cleaner"> | string
    frequencyService?: StringNullableFilter<"Cleaner"> | string | null
    specialRequirements?: StringNullableFilter<"Cleaner"> | string | null
    createdAt?: DateTimeFilter<"Cleaner"> | Date | string
    updatedAt?: DateTimeFilter<"Cleaner"> | Date | string
  }, "id">

  export type CleanerOrderByWithAggregationInput = {
    id?: SortOrder
    role?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    serviceType?: SortOrder
    time?: SortOrder
    date?: SortOrder
    numberOFCleaners?: SortOrder
    locationSpace?: SortOrder
    frequencyService?: SortOrder
    specialRequirements?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CleanerCountOrderByAggregateInput
    _avg?: CleanerAvgOrderByAggregateInput
    _max?: CleanerMaxOrderByAggregateInput
    _min?: CleanerMinOrderByAggregateInput
    _sum?: CleanerSumOrderByAggregateInput
  }

  export type CleanerScalarWhereWithAggregatesInput = {
    AND?: CleanerScalarWhereWithAggregatesInput | CleanerScalarWhereWithAggregatesInput[]
    OR?: CleanerScalarWhereWithAggregatesInput[]
    NOT?: CleanerScalarWhereWithAggregatesInput | CleanerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Cleaner"> | string
    role?: StringWithAggregatesFilter<"Cleaner"> | string
    name?: StringWithAggregatesFilter<"Cleaner"> | string
    phone?: StringWithAggregatesFilter<"Cleaner"> | string
    email?: StringWithAggregatesFilter<"Cleaner"> | string
    serviceType?: StringWithAggregatesFilter<"Cleaner"> | string
    time?: StringWithAggregatesFilter<"Cleaner"> | string
    date?: DateTimeWithAggregatesFilter<"Cleaner"> | Date | string
    numberOFCleaners?: IntWithAggregatesFilter<"Cleaner"> | number
    locationSpace?: StringWithAggregatesFilter<"Cleaner"> | string
    frequencyService?: StringNullableWithAggregatesFilter<"Cleaner"> | string | null
    specialRequirements?: StringNullableWithAggregatesFilter<"Cleaner"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Cleaner"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Cleaner"> | Date | string
  }

  export type TransportWhereInput = {
    AND?: TransportWhereInput | TransportWhereInput[]
    OR?: TransportWhereInput[]
    NOT?: TransportWhereInput | TransportWhereInput[]
    id?: StringFilter<"Transport"> | string
    role?: StringFilter<"Transport"> | string
    name?: StringFilter<"Transport"> | string
    phone?: StringFilter<"Transport"> | string
    email?: StringFilter<"Transport"> | string
    serviceType?: StringFilter<"Transport"> | string
    time?: StringFilter<"Transport"> | string
    date?: DateTimeFilter<"Transport"> | Date | string
    locationFrom?: StringFilter<"Transport"> | string
    locationTo?: StringFilter<"Transport"> | string
    frequencyService?: StringNullableFilter<"Transport"> | string | null
    specialRequirements?: StringNullableFilter<"Transport"> | string | null
    createdAt?: DateTimeFilter<"Transport"> | Date | string
    updatedAt?: DateTimeFilter<"Transport"> | Date | string
  }

  export type TransportOrderByWithRelationInput = {
    id?: SortOrder
    role?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    serviceType?: SortOrder
    time?: SortOrder
    date?: SortOrder
    locationFrom?: SortOrder
    locationTo?: SortOrder
    frequencyService?: SortOrder
    specialRequirements?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TransportWhereInput | TransportWhereInput[]
    OR?: TransportWhereInput[]
    NOT?: TransportWhereInput | TransportWhereInput[]
    role?: StringFilter<"Transport"> | string
    name?: StringFilter<"Transport"> | string
    phone?: StringFilter<"Transport"> | string
    email?: StringFilter<"Transport"> | string
    serviceType?: StringFilter<"Transport"> | string
    time?: StringFilter<"Transport"> | string
    date?: DateTimeFilter<"Transport"> | Date | string
    locationFrom?: StringFilter<"Transport"> | string
    locationTo?: StringFilter<"Transport"> | string
    frequencyService?: StringNullableFilter<"Transport"> | string | null
    specialRequirements?: StringNullableFilter<"Transport"> | string | null
    createdAt?: DateTimeFilter<"Transport"> | Date | string
    updatedAt?: DateTimeFilter<"Transport"> | Date | string
  }, "id">

  export type TransportOrderByWithAggregationInput = {
    id?: SortOrder
    role?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    serviceType?: SortOrder
    time?: SortOrder
    date?: SortOrder
    locationFrom?: SortOrder
    locationTo?: SortOrder
    frequencyService?: SortOrder
    specialRequirements?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TransportCountOrderByAggregateInput
    _max?: TransportMaxOrderByAggregateInput
    _min?: TransportMinOrderByAggregateInput
  }

  export type TransportScalarWhereWithAggregatesInput = {
    AND?: TransportScalarWhereWithAggregatesInput | TransportScalarWhereWithAggregatesInput[]
    OR?: TransportScalarWhereWithAggregatesInput[]
    NOT?: TransportScalarWhereWithAggregatesInput | TransportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Transport"> | string
    role?: StringWithAggregatesFilter<"Transport"> | string
    name?: StringWithAggregatesFilter<"Transport"> | string
    phone?: StringWithAggregatesFilter<"Transport"> | string
    email?: StringWithAggregatesFilter<"Transport"> | string
    serviceType?: StringWithAggregatesFilter<"Transport"> | string
    time?: StringWithAggregatesFilter<"Transport"> | string
    date?: DateTimeWithAggregatesFilter<"Transport"> | Date | string
    locationFrom?: StringWithAggregatesFilter<"Transport"> | string
    locationTo?: StringWithAggregatesFilter<"Transport"> | string
    frequencyService?: StringNullableWithAggregatesFilter<"Transport"> | string | null
    specialRequirements?: StringNullableWithAggregatesFilter<"Transport"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Transport"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Transport"> | Date | string
  }

  export type HelperWhereInput = {
    AND?: HelperWhereInput | HelperWhereInput[]
    OR?: HelperWhereInput[]
    NOT?: HelperWhereInput | HelperWhereInput[]
    id?: StringFilter<"Helper"> | string
    role?: StringFilter<"Helper"> | string
    name?: StringFilter<"Helper"> | string
    phone?: StringFilter<"Helper"> | string
    email?: StringFilter<"Helper"> | string
    serviceType?: StringFilter<"Helper"> | string
    time?: StringFilter<"Helper"> | string
    date?: DateTimeFilter<"Helper"> | Date | string
    location?: StringFilter<"Helper"> | string
    frequencyService?: StringNullableFilter<"Helper"> | string | null
    specialRequirements?: StringNullableFilter<"Helper"> | string | null
    createdAt?: DateTimeFilter<"Helper"> | Date | string
    updatedAt?: DateTimeFilter<"Helper"> | Date | string
  }

  export type HelperOrderByWithRelationInput = {
    id?: SortOrder
    role?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    serviceType?: SortOrder
    time?: SortOrder
    date?: SortOrder
    location?: SortOrder
    frequencyService?: SortOrder
    specialRequirements?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HelperWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HelperWhereInput | HelperWhereInput[]
    OR?: HelperWhereInput[]
    NOT?: HelperWhereInput | HelperWhereInput[]
    role?: StringFilter<"Helper"> | string
    name?: StringFilter<"Helper"> | string
    phone?: StringFilter<"Helper"> | string
    email?: StringFilter<"Helper"> | string
    serviceType?: StringFilter<"Helper"> | string
    time?: StringFilter<"Helper"> | string
    date?: DateTimeFilter<"Helper"> | Date | string
    location?: StringFilter<"Helper"> | string
    frequencyService?: StringNullableFilter<"Helper"> | string | null
    specialRequirements?: StringNullableFilter<"Helper"> | string | null
    createdAt?: DateTimeFilter<"Helper"> | Date | string
    updatedAt?: DateTimeFilter<"Helper"> | Date | string
  }, "id">

  export type HelperOrderByWithAggregationInput = {
    id?: SortOrder
    role?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    serviceType?: SortOrder
    time?: SortOrder
    date?: SortOrder
    location?: SortOrder
    frequencyService?: SortOrder
    specialRequirements?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HelperCountOrderByAggregateInput
    _max?: HelperMaxOrderByAggregateInput
    _min?: HelperMinOrderByAggregateInput
  }

  export type HelperScalarWhereWithAggregatesInput = {
    AND?: HelperScalarWhereWithAggregatesInput | HelperScalarWhereWithAggregatesInput[]
    OR?: HelperScalarWhereWithAggregatesInput[]
    NOT?: HelperScalarWhereWithAggregatesInput | HelperScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Helper"> | string
    role?: StringWithAggregatesFilter<"Helper"> | string
    name?: StringWithAggregatesFilter<"Helper"> | string
    phone?: StringWithAggregatesFilter<"Helper"> | string
    email?: StringWithAggregatesFilter<"Helper"> | string
    serviceType?: StringWithAggregatesFilter<"Helper"> | string
    time?: StringWithAggregatesFilter<"Helper"> | string
    date?: DateTimeWithAggregatesFilter<"Helper"> | Date | string
    location?: StringWithAggregatesFilter<"Helper"> | string
    frequencyService?: StringNullableWithAggregatesFilter<"Helper"> | string | null
    specialRequirements?: StringNullableWithAggregatesFilter<"Helper"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Helper"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Helper"> | Date | string
  }

  export type CleanerCreateInput = {
    id?: string
    role: string
    name: string
    phone: string
    email: string
    serviceType: string
    time: string
    date: Date | string
    numberOFCleaners: number
    locationSpace: string
    frequencyService?: string | null
    specialRequirements?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CleanerUncheckedCreateInput = {
    id?: string
    role: string
    name: string
    phone: string
    email: string
    serviceType: string
    time: string
    date: Date | string
    numberOFCleaners: number
    locationSpace: string
    frequencyService?: string | null
    specialRequirements?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CleanerUpdateInput = {
    role?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    serviceType?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    numberOFCleaners?: IntFieldUpdateOperationsInput | number
    locationSpace?: StringFieldUpdateOperationsInput | string
    frequencyService?: NullableStringFieldUpdateOperationsInput | string | null
    specialRequirements?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CleanerUncheckedUpdateInput = {
    role?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    serviceType?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    numberOFCleaners?: IntFieldUpdateOperationsInput | number
    locationSpace?: StringFieldUpdateOperationsInput | string
    frequencyService?: NullableStringFieldUpdateOperationsInput | string | null
    specialRequirements?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CleanerCreateManyInput = {
    id?: string
    role: string
    name: string
    phone: string
    email: string
    serviceType: string
    time: string
    date: Date | string
    numberOFCleaners: number
    locationSpace: string
    frequencyService?: string | null
    specialRequirements?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CleanerUpdateManyMutationInput = {
    role?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    serviceType?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    numberOFCleaners?: IntFieldUpdateOperationsInput | number
    locationSpace?: StringFieldUpdateOperationsInput | string
    frequencyService?: NullableStringFieldUpdateOperationsInput | string | null
    specialRequirements?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CleanerUncheckedUpdateManyInput = {
    role?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    serviceType?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    numberOFCleaners?: IntFieldUpdateOperationsInput | number
    locationSpace?: StringFieldUpdateOperationsInput | string
    frequencyService?: NullableStringFieldUpdateOperationsInput | string | null
    specialRequirements?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransportCreateInput = {
    id?: string
    role: string
    name: string
    phone: string
    email: string
    serviceType: string
    time: string
    date: Date | string
    locationFrom: string
    locationTo: string
    frequencyService?: string | null
    specialRequirements?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransportUncheckedCreateInput = {
    id?: string
    role: string
    name: string
    phone: string
    email: string
    serviceType: string
    time: string
    date: Date | string
    locationFrom: string
    locationTo: string
    frequencyService?: string | null
    specialRequirements?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransportUpdateInput = {
    role?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    serviceType?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    locationFrom?: StringFieldUpdateOperationsInput | string
    locationTo?: StringFieldUpdateOperationsInput | string
    frequencyService?: NullableStringFieldUpdateOperationsInput | string | null
    specialRequirements?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransportUncheckedUpdateInput = {
    role?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    serviceType?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    locationFrom?: StringFieldUpdateOperationsInput | string
    locationTo?: StringFieldUpdateOperationsInput | string
    frequencyService?: NullableStringFieldUpdateOperationsInput | string | null
    specialRequirements?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransportCreateManyInput = {
    id?: string
    role: string
    name: string
    phone: string
    email: string
    serviceType: string
    time: string
    date: Date | string
    locationFrom: string
    locationTo: string
    frequencyService?: string | null
    specialRequirements?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransportUpdateManyMutationInput = {
    role?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    serviceType?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    locationFrom?: StringFieldUpdateOperationsInput | string
    locationTo?: StringFieldUpdateOperationsInput | string
    frequencyService?: NullableStringFieldUpdateOperationsInput | string | null
    specialRequirements?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransportUncheckedUpdateManyInput = {
    role?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    serviceType?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    locationFrom?: StringFieldUpdateOperationsInput | string
    locationTo?: StringFieldUpdateOperationsInput | string
    frequencyService?: NullableStringFieldUpdateOperationsInput | string | null
    specialRequirements?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HelperCreateInput = {
    id?: string
    role: string
    name: string
    phone: string
    email: string
    serviceType: string
    time: string
    date: Date | string
    location: string
    frequencyService?: string | null
    specialRequirements?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HelperUncheckedCreateInput = {
    id?: string
    role: string
    name: string
    phone: string
    email: string
    serviceType: string
    time: string
    date: Date | string
    location: string
    frequencyService?: string | null
    specialRequirements?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HelperUpdateInput = {
    role?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    serviceType?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    frequencyService?: NullableStringFieldUpdateOperationsInput | string | null
    specialRequirements?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HelperUncheckedUpdateInput = {
    role?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    serviceType?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    frequencyService?: NullableStringFieldUpdateOperationsInput | string | null
    specialRequirements?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HelperCreateManyInput = {
    id?: string
    role: string
    name: string
    phone: string
    email: string
    serviceType: string
    time: string
    date: Date | string
    location: string
    frequencyService?: string | null
    specialRequirements?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HelperUpdateManyMutationInput = {
    role?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    serviceType?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    frequencyService?: NullableStringFieldUpdateOperationsInput | string | null
    specialRequirements?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HelperUncheckedUpdateManyInput = {
    role?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    serviceType?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    frequencyService?: NullableStringFieldUpdateOperationsInput | string | null
    specialRequirements?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type CleanerCountOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    serviceType?: SortOrder
    time?: SortOrder
    date?: SortOrder
    numberOFCleaners?: SortOrder
    locationSpace?: SortOrder
    frequencyService?: SortOrder
    specialRequirements?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CleanerAvgOrderByAggregateInput = {
    numberOFCleaners?: SortOrder
  }

  export type CleanerMaxOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    serviceType?: SortOrder
    time?: SortOrder
    date?: SortOrder
    numberOFCleaners?: SortOrder
    locationSpace?: SortOrder
    frequencyService?: SortOrder
    specialRequirements?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CleanerMinOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    serviceType?: SortOrder
    time?: SortOrder
    date?: SortOrder
    numberOFCleaners?: SortOrder
    locationSpace?: SortOrder
    frequencyService?: SortOrder
    specialRequirements?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CleanerSumOrderByAggregateInput = {
    numberOFCleaners?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type TransportCountOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    serviceType?: SortOrder
    time?: SortOrder
    date?: SortOrder
    locationFrom?: SortOrder
    locationTo?: SortOrder
    frequencyService?: SortOrder
    specialRequirements?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransportMaxOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    serviceType?: SortOrder
    time?: SortOrder
    date?: SortOrder
    locationFrom?: SortOrder
    locationTo?: SortOrder
    frequencyService?: SortOrder
    specialRequirements?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransportMinOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    serviceType?: SortOrder
    time?: SortOrder
    date?: SortOrder
    locationFrom?: SortOrder
    locationTo?: SortOrder
    frequencyService?: SortOrder
    specialRequirements?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HelperCountOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    serviceType?: SortOrder
    time?: SortOrder
    date?: SortOrder
    location?: SortOrder
    frequencyService?: SortOrder
    specialRequirements?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HelperMaxOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    serviceType?: SortOrder
    time?: SortOrder
    date?: SortOrder
    location?: SortOrder
    frequencyService?: SortOrder
    specialRequirements?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HelperMinOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    serviceType?: SortOrder
    time?: SortOrder
    date?: SortOrder
    location?: SortOrder
    frequencyService?: SortOrder
    specialRequirements?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use CleanerDefaultArgs instead
     */
    export type CleanerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CleanerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TransportDefaultArgs instead
     */
    export type TransportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TransportDefaultArgs<ExtArgs>
    /**
     * @deprecated Use HelperDefaultArgs instead
     */
    export type HelperArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = HelperDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}