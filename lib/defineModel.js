class DefineModel {
    constructor(dataSchema) {
        this.dataSchema = dataSchema;
    }

    getDataSchema() {
        return this.dataSchema;
    }

    changeDataScheme(newDataSchema) {
        this.dataSchema = newDataSchema;
    }
}

exports = module.exports = dataSchema;
exports.DefineModel = DefineModel;
