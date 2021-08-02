import React from 'react'
import { DictAudio } from './DictAudio'


export function DictList({ spinner, meanings, vocabs }) {
    return (
        <div key={meanings.meanings[0].definitions[0].definition}>
            <DictAudio vocabs={vocabs} spinner={spinner} meanings={meanings} />
            <div key={meanings.meanings[0].definitions[0].definition} className="box">
                {meanings.meanings.map((elem) => (
                    elem.definitions.map((def) => (
                        <span>
                            <div key={elem.id}>
                                <p key={elem.id}
                                    className="has-text-weight-medium is-size-4">
                                    {elem.partOfSpeech}
                                </p><br />
                                <p key={elem.id}>{def.definition}</p>
                                <div>
                                    {def.example && (
                                        <span>
                                            <b>Example :</b> {def.example}
                                        </span>
                                    )}
                                </div>
                                <div>
                                    {def.synonyms && (
                                        <span>
                                            <b>Synonyms :</b> {def.synonyms.map((s) => `${s}, `)}
                                        </span>
                                    )}
                                </div>
                            </div> <hr style={{ backgroundColor: 'black', width: '100%' }} />
                        </span>

                    ))
                ))}
            </div>
        </div>
    )
}
