import useMacbookStore from '../stores';
import clsx from 'clsx';
import { Canvas } from '@react-three/fiber';

const ProductViewer = () => {
    const { color, size, setColor, setSize } = useMacbookStore();


    return (
        <section id='product-viewer'>
            <h2>Take a closer look</h2>

            <div className='controls'>
                <p className='info'>MacbookPro {size} in {color}</p>

                <div className='flex-center gap-5 mt-5'>
                    <div className='color-control'>
                        <div onClick={() => setColor('silver')} className={clsx('bg-neutral-300', color === 'silver' && 'active')} />
                        <div onClick={() => setColor('space-black')} className={clsx('bg-neutral-900', color === 'space-black' && 'active')} />
                    </div>

                    <div className='size-control'>
                        <div onClick={() => setSize('14"')} className={clsx(size === '14"' && 'active')}><p>14"</p></div>
                        <div onClick={() => setSize('16"')} className={clsx(size === '16"' && 'active')}><p>16"</p></div>
                    </div>
                </div>
            </div>

            <Canvas id='canvas'>
                <Box position={[-1, 1, 0]} size={10* size} material-color />
            </Canvas>
        </section>
    )
}

export default ProductViewer