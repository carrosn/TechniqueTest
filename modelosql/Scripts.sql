INSERT INTO public.convocatorias(
	numero, titulo, descripcion, estado, fecha_ap)
	VALUES (?, ?, ?, ?, ?);
	
DELETE FROM public.convocatorias
	WHERE <condition>;
	
SELECT numero, titulo, descripcion, estado, fecha_ap
	FROM public.convocatorias;
	
	
UPDATE public.convocatorias
	SET numero=?, titulo=?, descripcion=?, estado=?, fecha_ap=?
	WHERE <condition>;