import React, { useState, useEffect } from 'react'

import axios from 'axios'
import { DictForm } from '../components/DictForm'
import { DictList } from '../components/DictList'
import Loader from '../components/common/Loader'
import { useLoad } from '../hooks/request'
import { WORDS_LIST } from '../urls'
import { DictLearn } from '../components/DictLearn'

export const api = axios.create({
    baseURL: 'https://api.dictionaryapi.dev/api/v2/entries/en_GB/',
})

export function HomePage() {
    const vocabs = useLoad({ url: WORDS_LIST })
    const vocab = vocabs.response ? vocabs.response : []
    const [word, setWord] = useState(' ')
    const [meanings, setMeanings] = useState([])
    const [spinner, setSpinner] = useState()

    function onSubmit(data, actions) {
        actions.resetForm()
        setWord(data)
    }

    const dictionaryApi = async () => {
        setSpinner(true)
        const request = await api.get(`${word.word}`).catch((err) => console.log('Error:', err))
        setMeanings(request ? request.data : [])
        setSpinner(false)
    }

    useEffect(() => {
        dictionaryApi()

    // eslint-disable-next-line
  }, [word])

    return (
        <div className="my-6">
            <div className="has-text-centered has-text-weight-medium is-size-2 mb-6">Your Dictionary</div>
            <div className="columns is-centered">
                <div className="column  is-5">
                    <DictForm onSubmit={onSubmit} />
                    <div className="mt-3">
                        {/* eslint-disable-next-line no-nested-ternary */}
                        {typeof word.word === 'undefined'
                            ? (
                                <div
                                    className="column box has-text-centered has-text-weight-medium is-size-4">
                                    Start by typing a word in search
                                </div>
                            )
                        // eslint-disable-next-line no-nested-ternary
                            : spinner ? (<div className="media mt-6"><Loader className="is-size-1 mt-6" center /></div>)
                                : (meanings.length !== 0 ? (
                                    <DictList meanings={meanings[0]} vocabs={vocabs} spinner={spinner} />
                                ) : (
                                    <div
                                        className="column
                                has-text-danger box has-text-centered
                                has-text-weight-medium is-size-4">
                                        There is no such word
                                    </div>
                                ))}
                    </div>
                </div>
                <div className="column is-6">
                    <div className="pb-5 has-background-white">
                        <div className="has-text-weight-medium is-size-4 has-text-centered py-3">
                            My word list
                        </div>
                        <hr style={{ backgroundColor: 'gray', width: '100%' }} />
                        <div className="column">
                            {vocab.map((element) => (
                                <DictLearn
                                    key={element.id}
                                    vocab={element}
                                    vocabs={vocabs}
                                    meanings={meanings[0]} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
