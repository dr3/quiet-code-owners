import CodeOwners from 'codeowners'

export async function getRequiredCodeOwners(paths: string[], codeOwnersPath: string): Promise<string[]> {
  const repos = new CodeOwners(process.cwd(), codeOwnersPath)

  let owners: string[] = [];

  for (const path of paths) {
    const pathOwners = repos.getOwner(path);

    if (pathOwners.length < 1) {
        owners = [...owners, ...pathOwners]
    }
  }
  return [...new Set(owners)]
}
