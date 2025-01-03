const Category = require('../model/category');

const getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ msg: "Server Error" });
    }
};

const getCategoryById = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        if (!category) {
            res.status(404).json({ msg: "Category Not Found" });
        }
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ msg: "Server Error" });
    }
};

const createCategory = async (req, res) => {
    try {
        const { name, description } = req.body;
        const newCategory = new Category({ name, description });
        await newCategory.save();
        res.status(201).json(newCategory);
    } catch (error) {
        res.status(500).json({ msg: "Server Error" });
    }
};

const updateCategory = async (req, res) => {
    try {
        const { name, description } = req.body;
        const updatedCategory = await Category.findByIdAndUpdate(req.params.id, { name, description }, { new: true });
        if (!updatedCategory) {
            res.status(404).json({ msg: "Category Not Found" });
        }
        res.status(200).json(updatedCategory);
    } catch (error) {
        res.status(500).json({ msg: "Server Error" });
    }
};

const deleteCategory = async (req, res) => {
    try {
        const deletedCategory = await Category.findByIdAndDelete(req.params.id);
        if (!deletedCategory) {
            res.status(404).json({ msg: "Category Not Found" });
        }
        res.status(200).json(deletedCategory);
    } catch (error) {
        res.status(500).json({ msg: "Server Error" });
    }
};

module.exports = {
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory,
};
