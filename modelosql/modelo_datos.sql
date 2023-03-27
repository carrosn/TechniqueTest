-- Table: public.convocatorias

-- DROP TABLE public.convocatorias;

CREATE TABLE IF NOT EXISTS public.convocatorias
(
    numero bigint NOT NULL,
    titulo character varying(2000) COLLATE pg_catalog."default" NOT NULL,
    descripcion character varying(2000) COLLATE pg_catalog."default" NOT NULL,
    estado character varying(2000) COLLATE pg_catalog."default" NOT NULL,
    fecha_ap character varying(255) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT convocatorias_pkey PRIMARY KEY (numero)
)

TABLESPACE pg_default;

ALTER TABLE public.convocatorias
    OWNER to postgres;