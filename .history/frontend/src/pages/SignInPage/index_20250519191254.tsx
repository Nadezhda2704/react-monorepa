import { Section } from '../../components/Section';
import { Input } from '../../components/Input';
import { useFormik } from 'formik';
import { withZodSchema } from 'formik-validator-zod';
import { z } from 'zod';
import css from './index.module.scss';
import { Button } from '../../components/Button';
import { FormItems } from '../../components/FormItems';
import { trpc } from '../../lib/trpc';
import { useState } from 'react';
import { Informer } from '../../components/Informer';


export const SignInPage = () => {
    return (
        <Section title="Вход">
        </Section>
    )
}