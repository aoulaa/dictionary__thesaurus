import React, { useState } from 'react'
import Button from './common/Button'
import { usePostRequest } from '../hooks/request'
import { WORDS_LIST } from '../urls'

export function DictAudio({ spinner, meanings, vocabs }) {
    const [wordAdd, setWordAdd] = useState('Add')
    const [clicked, setClicked] = useState(false)
    const addWord = usePostRequest({ url: WORDS_LIST })
    const audio = new Audio(meanings.phonetics[0] ? meanings.phonetics[0].audio : null)

    const start = () => {
        audio.play()
    }

    async function handleClick() {
        setWordAdd('added')

        if (!clicked) {
            setClicked(true)
            const { success } = await addWord.request({ data: {
                name: meanings.word,

            } })
            if (success) vocabs.request()
        }
    }

    return (
        <div className="mb-4">
            {/* eslint-disable-next-line no-nested-ternary */}
            {spinner ? null
                : meanings.phonetics[0]
                    ? (
                        <div className="box">
                            <div className="columns ">
                                <div className="column">
                                    <div className="has-text-weight-medium is-size-4">{meanings.word}</div>
                                </div>
                                <div className="column is-narrow">
                                    <Button
                                        onClick={() => handleClick()}
                                        text={wordAdd}
                                        className={wordAdd === 'Add' ? 'is-link' : 'is-primary'} />
                                </div>
                            </div>
                            <div>{meanings.phonetics[0].text}
                                <Button
                                    className="is-medium icon-button pb-5 pl-2"
                                    icon="volume-medium-outline" onClick={start} />
                            </div>
                        </div>
                    ) : null}
        </div>
    )
}
