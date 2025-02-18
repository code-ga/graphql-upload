// @ts-check

import {Readable} from 'stream'

/**
 * Converts a Node.js readable stream to a string.
 * @param {import("stream").Readable} stream Node.js readable stream.
 * @returns {Promise<string>} Resolves the final string.
 */
export default function streamToString(stream: Readable) {
	return new Promise((resolve, reject) => {
		let data = ''
		stream
			.on('error', reject)
			.on('data', (chunk) => {
				data += chunk
			})
			.on('end', () => resolve(data))
	})
}
