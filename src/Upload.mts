// @ts-check

/** @typedef {import("./GraphQLUpload.js").default} GraphQLUpload */
/** @typedef {import("./processRequest.mjs").default} processRequest */

/**
 * A file expected to be uploaded as it was declared in the `map` field of a
 * [GraphQL multipart request](https://github.com/jaydenseric/graphql-multipart-request-spec).
 * The {@linkcode processRequest} function places references to an instance of
 * this class wherever the file is expected in the GraphQL operation. The scalar
 * {@linkcode GraphQLUpload} derives it’s value from {@linkcode Upload.promise}.
 */
export default class Upload {
	promise: Promise<any>
	resolve!: (
		file: /** @typedef {import("./GraphQLUpload.js").default} GraphQLUpload */ any
	) => void
	file: any
	reject!: (reason?: any) => void
	constructor() {
		/**
		 * Promise that resolves file upload details. This should only be utilized
		 * by {@linkcode GraphQLUpload}.
		 * @type {Promise<import("./processRequest.mjs").FileUpload>}
		 */
		this.promise = new Promise((resolve, reject) => {
			/**
			 * Resolves the upload promise with the file upload details. This should
			 * only be utilized by {@linkcode processRequest}.
			 * @param {import("./processRequest.mjs").FileUpload} file File upload
			 *   details.
			 */
			this.resolve = (file) => {
				/**
				 * The file upload details, available when the
				 * {@linkcode Upload.promise} resolves. This should only be utilized by
				 * {@linkcode processRequest}.
				 * @type {import("./processRequest.mjs").FileUpload | undefined}
				 */
				this.file = file

				resolve(file)
			}

			/**
			 * Rejects the upload promise with an error. This should only be
			 * utilized by {@linkcode processRequest}.
			 * @param {Error} error Error instance.
			 */
			this.reject = reject
		})

		// Prevent errors crashing Node.js, see:
		// https://github.com/nodejs/node/issues/20392
		this.promise.catch(() => {})
	}
}
