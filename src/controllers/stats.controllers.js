const { Service } = require("../models/booking");
const { Offer } = require("../models/get-offer");
const { Partner } = require("../models/partners");
const { Task } = require("../models/task");
const { User } = require("../models/user");

exports.getUserRegistrationsPerMonth = async (req, res) => {
    try {
        const oneYearAgo = new Date();
        oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

        const registrations = await User.aggregate([
            { $match: { createdAt: { $gte: oneYearAgo } } },
            {
                $group: {
                    _id: { $month: '$createdAt' },
                    count: { $sum: 1 },
                },
            },
            { $sort: { '_id': 1 } },
        ]);

        res.status(200).json({ data: registrations });
    } catch (error) {
        console.error('Error fetching user registrations:', error);
        res.status(500).json({ error: 'Error fetching user registrations.' });
    }
};



exports.getOffersPerMonth = async (req, res) => {
    try {
        const oneYearAgo = new Date();
        oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

        const offers = await Offer.aggregate([
            { $match: { createdAt: { $gte: oneYearAgo } } },
            {
                $group: {
                    _id: { $month: '$createdAt' },
                    count: { $sum: 1 },
                },
            },
            { $sort: { '_id': 1 } },
        ]);

        res.status(200).json({ data: offers });
    } catch (error) {
        console.error('Error fetching offers per month:', error);
        res.status(500).json({ error: 'Error fetching offers per month.' });
    }
};


exports.getPartnersPerMonth = async (req, res) => {
    try {
        const oneYearAgo = new Date();
        oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

        const partners = await Partner.aggregate([
            { $match: { createdAt: { $gte: oneYearAgo } } },
            {
                $group: {
                    _id: { $month: '$createdAt' },
                    count: { $sum: 1 },
                },
            },
            { $sort: { '_id': 1 } },
        ]);

        res.status(200).json({ data: partners });
    } catch (error) {
        console.error('Error fetching partners per month:', error);
        res.status(500).json({ error: 'Error fetching partners per month.' });
    }
};



exports.getTaskStatusCounts = async (req, res) => {
    try {
        const statusCounts = await Task.aggregate([
            {
                $group: {
                    _id: '$status',
                    count: { $sum: 1 },
                },
            },
        ]);

        res.status(200).json({ data: statusCounts });
    } catch (error) {
        console.error('Error fetching task status counts:', error);
        res.status(500).json({ error: 'Error fetching task status counts.' });
    }
};



exports.getServicesPerTypePerMonth = async (req, res) => {
    try {
        const oneYearAgo = new Date();
        oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

        const services = await Service.aggregate([
            { $match: { createdAt: { $gte: oneYearAgo } } },
            { $unwind: '$selectedServices' },
            {
                $group: {
                    _id: {
                        month: { $month: '$createdAt' },
                        serviceType: '$selectedServices.name',
                    },
                    count: { $sum: 1 },
                },
            },
            { $sort: { '_id.month': 1 } },
        ]);

        res.status(200).json({ data: services });
    } catch (error) {
        console.error('Error fetching services per type per month:', error);
        res.status(500).json({ error: 'Error fetching services per type per month.' });
    }
};


