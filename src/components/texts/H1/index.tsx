import { L10nItem } from '@/constants/l10n'
import { joinStr } from '@/util/string'
import { type FC, Fragment,  } from 'react'

interface Props {
  content: L10nItem
  isCentered?: boolean
}

export const H1: FC<Props> = ({ isCentered, content }) => {
  const className = joinStr(
    'text-primary font-heading text-3xl leading-none font-bold',
    isCentered ? 'text-center' : null,
  )

  if (content.type === 'string-with-ruby') {
    return (
      <h1 className={className}>
        <ruby>
          {content.value.map((c, i) => (
            <Fragment key={`h1-ruby-${i}`}>
              <>{c.value}</>
              <>
                <rp>{'('}</rp>
                <rt className='text-xs'>{c.ruby}</rt>
                <rp>{')'}</rp>
              </>
            </Fragment>
          ))}
        </ruby>
      </h1>
    )
  }

  if (content.type === 'multi-string') {
    ;<h1 className={className}>{content.value}</h1>
  }

  return <h1 className={className}>{content.value}</h1>
}
