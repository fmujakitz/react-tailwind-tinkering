/**
 * Poormans utility for classnames
 */

const purge = (str: string) => str
  .replace(/\n/igm, ' ')
  .replace(/ +/igm, ' ')
  .trim()

const cx = (...args: any[]) => purge(args
  .filter(Boolean)
  .map((arg) => {
    if (typeof arg === 'string') return arg

    return Object.keys(arg)
      .reduce((acc: any[], curr: string) => {
        if (arg[curr]) {
          acc.push([curr])
        }
        return acc
      }, [])
  })
  .flat().join(' '))

export default cx

export { cx }
