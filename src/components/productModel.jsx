import React from 'react';
import { Modal, useMantineTheme } from '@mantine/core';

function ProductModel({openModel,setOpenModel}){
    const theme = useMantineTheme();
    return ( 
        <Modal
        title="Product Description"
        overlayProps={{
            color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2],
            opacity: 0.25,
            blur: 1,
        }}
        opened={openModel}
        onClose={()=> setOpenModel(false)}
        >
        A product description...
      </Modal>
     );
}

export default ProductModel;