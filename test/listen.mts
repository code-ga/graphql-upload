// @ts-check
import http from 'http'
import net from 'net'
/**
 * Starts a Node.js HTTP server.
 * @param {import("http").Server} server Node.js HTTP server.
 * @returns Resolves the port the server is listening on, and a server close
 *   function.
 */
export default async function listen(server: http.Server) {
	await new Promise((resolve) => {
		server.listen(resolve)
	})

	return {
		port: (server.address() as net.AddressInfo)?.port,
		close: () => server.close(),
	}
}
