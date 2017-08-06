const DataLoader = require('dataloader');

async function batchAccounts (Accounts, keys){
	return await Accounts.find({_id: {$in: keys}}).toArray();
}

module.exports = ({Accounts}) => ({
	accountLoader: new DataLoader(
		keys => batchAccounts(Accounts, keys),
		{cacheKeyFn: key => key.toString()},
	),
});