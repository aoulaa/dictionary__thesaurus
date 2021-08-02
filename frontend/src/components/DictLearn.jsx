import React from 'react'
import { AiOutlineCheck } from 'react-icons/all'
import { WORD_DETAIL } from '../urls'
import { usePutRequest } from '../hooks/request'
import { useModal } from '../hooks/modal'
import { DetailWord } from './DetailWord'


export function DictLearn({ vocabs, vocab, meanings }) {
    const wordDetailUpdate = usePutRequest({ url: WORD_DETAIL.replace('{id}', vocab.id) })

    async function changeStatus() {
        const { success } = await wordDetailUpdate.request({ data: {
            is_learned: true,
        } })
        if (success) {
            vocabs.request()
        }
    }

    const [showWordDetail] = useModal(
        <DetailWord meanings={meanings} vocabs={vocabs.name} />,
    )

    return (
        <span key={vocab.id}>
            <article className="mx-5
                               is-mobile mb-2 message is-link has-text-weight-medium">
                <div className="message-body is-mobile">
                    <div className="columns is-mobile">
                        <div className="column">
                            <a href="/#" onClick={showWordDetail}>{vocab.name}</a>
                        </div>
                        <div className="column  is-narrow">
                            <a onClick={() => changeStatus()} href="/#"><AiOutlineCheck /></a>
                        </div>
                    </div>
                </div>
            </article>
        </span>
    )
}
