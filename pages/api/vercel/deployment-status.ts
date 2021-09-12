// this code is reference from `https://dev.to/felixmohr/displaying-a-deployment-status-badge-for-your-next-js-app-on-your-github-readme-hml`
import type { NextApiRequest, NextApiResponse } from 'next'
import deploymentBadgeHandler from 'deployment-badge'

const deploymentsUrl = 'https://api.github.com/repos/nasustim/nasustim.com/deployments'

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  await deploymentBadgeHandler(req, res, { deploymentsUrl, namedLogo: 'vercel', env: 'Production' })
}

export default handler
