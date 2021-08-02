import React from 'react'
import { Form, Formik } from 'formik'
import Input from './common/Input'
import Button from './common/Button'


export function DictForm({ onSubmit }) {
    return (
        <Formik onSubmit={onSubmit} initialValues={{ word: '' }}>
            <Form>
                <div className="columns is-mobile">
                    <div className="column pr-0">
                        <Input
                            className="is-normal"
                            name="word"
                            placeholder="Enter a word"
                        />
                    </div>
                    <div className="column is-mobile pl-0 is-narrow">
                        <Button
                            type="submit"
                            className="is-success"
                            text="Search" />
                    </div>
                </div>
            </Form>
        </Formik>
    )
}
