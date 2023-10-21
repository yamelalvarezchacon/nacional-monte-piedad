const { db } = require('./firebase.js');

exports.handler = async (event) => {
    const body = JSON.parse(event.body);
    const base64EncodedFile = body.file;

    const buffer = Buffer.from(base64EncodedFile, 'base64');
    const fileContent = buffer.toString('utf-8');
    const lines = fileContent.split('\n');

    const collectionRef = db.collection('company');

    for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split(',');
        const id = values[0].trim();
        const docRef = collectionRef.doc(id);

        await docRef.set({
            Id: id,
            name: values[1].trim(),
            age: values[2].trim(),
            gender: values[3].trim(),
        });
    }

    return {
        statusCode: 200,
        body: JSON.stringify('Datos insertados correctamente'),
    };
};