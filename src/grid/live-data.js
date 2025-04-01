this.default = function () {
    var getTradeData = [
        {
            id: 1,
            CountryCode: 'US',
            Change: -1.62,
            Net: 4.54,
            Rating: 'Sell',
            NetIncome: 8975.0,
            Sector: 'Technology',
            EmployeeCount: 2345,
            Revenue: 1200000,
        },
        {
            id: 2,
            CountryCode: 'UK',
            Change: 0.33,
            Net: 5.83,
            Rating: 'Buy',
            NetIncome: 10500.0,
            Sector: 'Healthcare',
            EmployeeCount: 1234,
            Revenue: 1500000,
        },
        {
            id: 3,
            CountryCode: 'AU',
            Change: -0.89,
            Net: 2.54,
            Rating: 'Sell',
            NetIncome: 12000.0,
            Sector: 'Finance',
            EmployeeCount: 3459,
            Revenue: 1700000,
        },
        {
            id: 4,
            CountryCode: 'JP',
            Change: 0.12,
            Net: 6.99,
            Rating: 'Buy',
            NetIncome: 5500.0,
            Sector: 'Retail',
            EmployeeCount: 4567,
            Revenue: 1000000,
        },
        {
            id: 5,
            CountryCode: 'FR',
            Change: -0.59,
            Net: 4.34,
            Rating: 'Sell',
            NetIncome: 7500.0,
            Sector: 'Manufacturing',
            EmployeeCount: 2347,
            Revenue: 1100000,
        },
        {
            id: 6,
            CountryCode: 'IN',
            Change: 0.67,
            Net: 4.19,
            Rating: 'Buy',
            NetIncome: 9500.0,
            Sector: 'Energy',
            EmployeeCount: 3457,
            Revenue: 1300000,
        },
        {
            id: 7,
            CountryCode: 'CA',
            Change: -1.25,
            Net: 3.02,
            Rating: 'Sell',
            NetIncome: 6500.0,
            Sector: 'Consumer Goods',
            EmployeeCount: 1235,
            Revenue: 1600000,
        },
        {
            id: 8,
            CountryCode: 'DE',
            Change: 0.38,
            Net: 7.23,
            Rating: 'Buy',
            NetIncome: 8500.0,
            Sector: 'Telecommunications',
            EmployeeCount: 2346,
            Revenue: 1400000,
        },
        {
            id: 9,
            CountryCode: 'NZ',
            Change: -0.12,
            Net: 5.19,
            Rating: 'Sell',
            NetIncome: 10500.0,
            Sector: 'Transportation',
            EmployeeCount: 4567,
            Revenue: 1900000,
        },
        {
            id: 10,
            CountryCode: 'RU',
            Change: 0.67,
            Net: 4.88,
            Rating: 'Buy',
            NetIncome: 7500.0,
            Sector: 'Utilities',
            EmployeeCount: 3458,
            Revenue: 1800000,
        },
        {
            id: 11,
            CountryCode: 'US',
            Change: -0.4,
            Net: 9.8,
            Rating: 'Sell',
            NetIncome: 5.2,
            Sector: 'Technology',
            EmployeeCount: 3000,
            Revenue: 4500,
        },
        {
            id: 12,
            CountryCode: 'GB',
            Change: 0.7,
            Net: 11.5,
            Rating: 'Buy',
            NetIncome: 6.3,
            Sector: 'Retail',
            EmployeeCount: 2000,
            Revenue: 3000,
        },
        {
            id: 13,
            CountryCode: 'FR',
            Change: -0.2,
            Net: 8.9,
            Rating: 'Sell',
            NetIncome: 4.5,
            Sector: 'Manufacturing',
            EmployeeCount: 4000,
            Revenue: 7000,
        },
        {
            id: 14,
            CountryCode: 'CN',
            Change: 0.9,
            Net: 12.1,
            Rating: 'Buy',
            NetIncome: 7.2,
            Sector: 'Energy',
            EmployeeCount: 5000,
            Revenue: 10000,
        },
        {
            id: 15,
            CountryCode: 'JP',
            Change: -0.5,
            Net: 9.3,
            Rating: 'Sell',
            NetIncome: 5.7,
            Sector: 'Financial Services',
            EmployeeCount: 2000,
            Revenue: 4000,
        },
        {
            id: 16,
            CountryCode: 'DE',
            Change: 0.6,
            Net: 11.2,
            Rating: 'Buy',
            NetIncome: 6.8,
            Sector: 'Telecommunications',
            EmployeeCount: 3000,
            Revenue: 6000,
        },
        {
            id: 17,
            CountryCode: 'IT',
            Change: -0.3,
            Net: 8.6,
            Rating: 'Sell',
            NetIncome: 4.2,
            Sector: 'Transportation',
            EmployeeCount: 4000,
            Revenue: 8000,
        },
        {
            id: 18,
            CountryCode: 'CA',
            Change: 0.8,
            Net: 11.8,
            Rating: 'Buy',
            NetIncome: 7.7,
            Sector: 'Consumer Goods',
            EmployeeCount: 5000,
            Revenue: 12000,
        },
        {
            id: 19,
            CountryCode: 'KR',
            Change: -0.4,
            Net: 9.4,
            Rating: 'Sell',
            NetIncome: 5.4,
            Sector: 'Health Care',
            EmployeeCount: 2000,
            Revenue: 5000,
        },
        {
            id: 20,
            CountryCode: 'AU',
            Change: 0.7,
            Net: 11.6,
            Rating: 'Buy',
            NetIncome: 6.5,
            Sector: 'Real Estate',
            EmployeeCount: 3000,
            Revenue: 7000,
        },
        {
            id: 21,
            CountryCode: 'US',
            Change: -0.02,
            Net: 4.5,
            Rating: 'Sell',
            NetIncome: 50000,
            Sector: 'Technology',
            EmployeeCount: 1000,
            Revenue: 1000000,
        },
        {
            id: 22,
            CountryCode: 'UK',
            Change: 0.03,
            Net: 3.2,
            Rating: 'Buy',
            NetIncome: 40000,
            Sector: 'Finance',
            EmployeeCount: 500,
            Revenue: 500000,
        },
        {
            id: 23,
            CountryCode: 'JP',
            Change: 0.01,
            Net: 2.1,
            Rating: 'Buy',
            NetIncome: 30000,
            Sector: 'Retail',
            EmployeeCount: 200,
            Revenue: 200000,
        },
        {
            id: 24,
            CountryCode: 'DE',
            Change: -0.04,
            Net: 1.5,
            Rating: 'Sell',
            NetIncome: 25000,
            Sector: 'Manufacturing',
            EmployeeCount: 150,
            Revenue: 150000,
        },
        {
            id: 25,
            CountryCode: 'FR',
            Change: 0.06,
            Net: 4.2,
            Rating: 'Buy',
            NetIncome: 45000,
            Sector: 'Energy',
            EmployeeCount: 800,
            Revenue: 800000,
        },
        {
            id: 26,
            CountryCode: 'IT',
            Change: 0.02,
            Net: 3.1,
            Rating: 'Buy',
            NetIncome: 35000,
            Sector: 'Transportation',
            EmployeeCount: 600,
            Revenue: 600000,
        },
        {
            id: 27,
            CountryCode: 'ES',
            Change: -0.03,
            Net: 2.5,
            Rating: 'Sell',
            NetIncome: 30000,
            Sector: 'Telecommunications',
            EmployeeCount: 400,
            Revenue: 400000,
        },
        {
            id: 28,
            CountryCode: 'CA',
            Change: 0.05,
            Net: 4.0,
            Rating: 'Buy',
            NetIncome: 40000,
            Sector: 'Healthcare',
            EmployeeCount: 700,
            Revenue: 700000,
        },
        {
            id: 29,
            CountryCode: 'AU',
            Change: 0.01,
            Net: 2.8,
            Rating: 'Buy',
            NetIncome: 28000,
            Sector: 'Consumer Goods',
            EmployeeCount: 500,
            Revenue: 500000,
        },
        {
            id: 30,
            CountryCode: 'CH',
            Change: -0.02,
            Net: 1.7,
            Rating: 'Sell',
            NetIncome: 25000,
            Sector: 'Industrial Goods',
            EmployeeCount: 300,
            Revenue: 300000,
        },
        {
            id: 31,
            CountryCode: 'US',
            Change: 2.1,
            Net: 156.22,
            Rating: 'Buy',
            NetIncome: 3600,
            Sector: 'Technology',
            EmployeeCount: 5000,
            Revenue: 15000,
        },
        {
            id: 32,
            CountryCode: 'UK',
            Change: -1.1,
            Net: 159.96,
            Rating: 'Sell',
            NetIncome: 3700,
            Sector: 'Retail',
            EmployeeCount: 3000,
            Revenue: 12000,
        },
        {
            id: 33,
            CountryCode: 'CA',
            Change: 4.6,
            Net: 102.8,
            Rating: 'Buy',
            NetIncome: 2260,
            Sector: 'Oil and Gas',
            EmployeeCount: 2000,
            Revenue: 8500,
        },
        {
            id: 34,
            CountryCode: 'IN',
            Change: 0.6,
            Net: 65.12,
            Rating: 'Buy',
            NetIncome: 4600,
            Sector: 'Financial Services',
            EmployeeCount: 2800,
            Revenue: 15500,
        },
        {
            id: 35,
            CountryCode: 'DE',
            Change: 3.7,
            Net: 200.11,
            Rating: 'Buy',
            NetIncome: 7000,
            Sector: 'Technology',
            EmployeeCount: 4000,
            Revenue: 18000,
        },
        {
            id: 36,
            CountryCode: 'FR',
            Change: -2.8,
            Net: 140.45,
            Rating: 'Sell',
            NetIncome: 3500,
            Sector: 'Retail',
            EmployeeCount: 3000,
            Revenue: 12000,
        },
        {
            id: 37,
            CountryCode: 'IT',
            Change: 1.8,
            Net: 78.3,
            Rating: 'Buy',
            NetIncome: 2500,
            Sector: 'Telecommunications',
            EmployeeCount: 4500,
            Revenue: 17000,
        },
        {
            id: 38,
            CountryCode: 'AU',
            Change: -7.2,
            Net: 73.09,
            Rating: 'Sell',
            NetIncome: 3800,
            Sector: 'Utilities',
            EmployeeCount: 3400,
            Revenue: 16000,
        },
        {
            id: 39,
            CountryCode: 'JP',
            Change: 5.3,
            Net: 180.23,
            Rating: 'Buy',
            NetIncome: 3600,
            Sector: 'Consumer Goods',
            EmployeeCount: 5500,
            Revenue: 14000,
        },
        {
            id: 40,
            CountryCode: 'CH',
            Change: -0.1,
            Net: 80.45,
            Rating: 'Sell',
            NetIncome: 4700,
            Sector: 'Pharmaceuticals',
            EmployeeCount: 3300,
            Revenue: 11000,
        },
        {
            id: 41,
            CountryCode: 'US',
            Change: -3.5,
            Net: -2.1,
            Rating: 'Sell',
            NetIncome: 578.3,
            Sector: 'Technology',
            EmployeeCount: 9500,
            Revenue: 7.2,
        },
        {
            id: 42,
            CountryCode: 'UK',
            Change: -1.6,
            Net: -0.9,
            Rating: 'Sell',
            NetIncome: 890.2,
            Sector: 'Consumer Goods',
            EmployeeCount: 7300,
            Revenue: 5.5,
        },
        {
            id: 43,
            CountryCode: 'FR',
            Change: 2.1,
            Net: 0.5,
            Rating: 'Buy',
            NetIncome: 645.2,
            Sector: 'Financial Services',
            EmployeeCount: 8400,
            Revenue: 4.7,
        },
        {
            id: 44,
            CountryCode: 'DE',
            Change: 4.2,
            Net: 1.3,
            Rating: 'Buy',
            NetIncome: 876.4,
            Sector: 'Industrial Goods',
            EmployeeCount: 6200,
            Revenue: 3.9,
        },
        {
            id: 45,
            CountryCode: 'JP',
            Change: -5.7,
            Net: -2.9,
            Rating: 'Sell',
            NetIncome: 543.2,
            Sector: 'Technology',
            EmployeeCount: 8100,
            Revenue: 6.1,
        },
        {
            id: 46,
            CountryCode: 'CA',
            Change: -2.3,
            Net: -1.2,
            Rating: 'Sell',
            NetIncome: 721.1,
            Sector: 'Retail',
            EmployeeCount: 9200,
            Revenue: 5.4,
        },
        {
            id: 47,
            CountryCode: 'AU',
            Change: 3.4,
            Net: 0.9,
            Rating: 'Buy',
            NetIncome: 678.3,
            Sector: 'Energy',
            EmployeeCount: 7400,
            Revenue: 4.6,
        },
        {
            id: 48,
            CountryCode: 'NZ',
            Change: 5.1,
            Net: 1.5,
            Rating: 'Buy',
            NetIncome: 521.4,
            Sector: 'Health Care',
            EmployeeCount: 8500,
            Revenue: 3.8,
        },
        {
            id: 49,
            CountryCode: 'CN',
            Change: -4.8,
            Net: -2.6,
            Rating: 'Sell',
            NetIncome: 789.2,
            Sector: 'Retail',
            EmployeeCount: 6300,
            Revenue: 6.0,
        },
        {
            id: 50,
            CountryCode: 'RU',
            Change: -1.9,
            Net: -1.0,
            Rating: 'Sell',
            NetIncome: 654.1,
            Sector: 'Financial Services',
            EmployeeCount: 7500,
            Revenue: 5.3,
        },
        {
            id: 51,
            CountryCode: 'US',
            Change: -0.02,
            Net: 4.5,
            Rating: 'Sell',
            NetIncome: 50000,
            Sector: 'Technology',
            EmployeeCount: 1000,
            Revenue: 1000000,
        },
        {
            id: 52,
            CountryCode: 'UK',
            Change: 0.03,
            Net: 3.2,
            Rating: 'Buy',
            NetIncome: 40000,
            Sector: 'Finance',
            EmployeeCount: 500,
            Revenue: 500000,
        },
        {
            id: 53,
            CountryCode: 'JP',
            Change: 0.01,
            Net: 2.1,
            Rating: 'Buy',
            NetIncome: 30000,
            Sector: 'Retail',
            EmployeeCount: 200,
            Revenue: 200000,
        },
        {
            id: 54,
            CountryCode: 'DE',
            Change: -0.04,
            Net: 5.6,
            Rating: 'Sell',
            NetIncome: 60000,
            Sector: 'Manufacturing',
            EmployeeCount: 1500,
            Revenue: 1500000,
        },
        {
            id: 55,
            CountryCode: 'FR',
            Change: 0.06,
            Net: 1.7,
            Rating: 'Buy',
            NetIncome: 25000,
            Sector: 'Transportation',
            EmployeeCount: 300,
            Revenue: 300000,
        },
        {
            id: 56,
            CountryCode: 'IT',
            Change: 0.02,
            Net: 4.3,
            Rating: 'Buy',
            NetIncome: 35000,
            Sector: 'Energy',
            EmployeeCount: 400,
            Revenue: 400000,
        },
        {
            id: 57,
            CountryCode: 'ES',
            Change: -0.05,
            Net: 3.4,
            Rating: 'Sell',
            NetIncome: 45000,
            Sector: 'Healthcare',
            EmployeeCount: 600,
            Revenue: 600000,
        },
        {
            id: 58,
            CountryCode: 'CA',
            Change: 0.07,
            Net: 2.5,
            Rating: 'Buy',
            NetIncome: 20000,
            Sector: 'Telecommunications',
            EmployeeCount: 100,
            Revenue: 100000,
        },
        {
            id: 59,
            CountryCode: 'AU',
            Change: 0.03,
            Net: 1.6,
            Rating: 'Buy',
            NetIncome: 30000,
            Sector: 'Media',
            EmployeeCount: 200,
            Revenue: 200000,
        },
        {
            id: 60,
            CountryCode: 'CH',
            Change: -0.02,
            Net: 5.7,
            Rating: 'Sell',
            NetIncome: 55000,
            Sector: 'Consumer Goods',
            EmployeeCount: 700,
            Revenue: 700000,
        },
        {
            id: 61,
            CountryCode: 'AD',
            Change: 0.8,
            Net: -30.4,
            Rating: 'Sell',
            NetIncome: 398932.53,
            Sector: 'Technology',
            EmployeeCount: 34023,
            Revenue: 498932.39,
        },
        {
            id: 62,
            CountryCode: 'AE',
            Change: 9.5,
            Net: 8.2,
            Rating: 'Buy',
            NetIncome: 2033942.12,
            Sector: 'Consumer Goods',
            EmployeeCount: 95487,
            Revenue: 2839483.93,
        },
        {
            id: 63,
            CountryCode: 'AF',
            Change: 4.9,
            Net: 15.1,
            Rating: 'Buy',
            NetIncome: 1549832.5,
            Sector: 'Finance',
            EmployeeCount: 204357,
            Revenue: 2498783.48,
        },
        {
            id: 64,
            CountryCode: 'AG',
            Change: 2.6,
            Net: 8.7,
            Rating: 'Buy',
            NetIncome: 1873456.32,
            Sector: 'Energy',
            EmployeeCount: 213586,
            Revenue: 2673909.94,
        },
        {
            id: 65,
            CountryCode: 'AI',
            Change: 7.2,
            Net: -14.0,
            Rating: 'Sell',
            NetIncome: 1938547.48,
            Sector: 'Healthcare',
            EmployeeCount: 95287,
            Revenue: 2897456.81,
        },
        {
            id: 66,
            CountryCode: 'AL',
            Change: 25.7,
            Net: -11.9,
            Rating: 'Sell',
            NetIncome: 283232.02,
            Sector: 'Telecommunications',
            EmployeeCount: 83287,
            Revenue: 339552.82,
        },
        {
            id: 67,
            CountryCode: 'AM',
            Change: 0.5,
            Net: 19.4,
            Rating: 'Buy',
            NetIncome: 2878439.9,
            Sector: 'Utilities',
            EmployeeCount: 393208,
            Revenue: 3995968.39,
        },
        {
            id: 68,
            CountryCode: 'AN',
            Change: 3.6,
            Net: -5.5,
            Rating: 'Sell',
            NetIncome: 298527.3,
            Sector: 'Advertising',
            EmployeeCount: 76285,
            Revenue: 345753.07,
        },
        {
            id: 69,
            CountryCode: 'AO',
            Change: 11.2,
            Net: 12.9,
            Rating: 'Buy',
            NetIncome: 1898422.92,
            Sector: 'Entertainment',
            EmployeeCount: 113002,
            Revenue: 2489272.88,
        },
        {
            id: 70,
            CountryCode: 'AP',
            Change: 1.7,
            Net: 6.8,
            Rating: 'Buy',
            NetIncome: 153893.56,
            Sector: 'Retail',
            EmployeeCount: 54392,
            Revenue: 229239.22,
        },
        {
            id: 71,
            CountryCode: 'IN',
            Change: -0.2,
            Net: 9.2,
            Rating: 'Sell',
            NetIncome: 150000,
            Sector: 'Technology',
            EmployeeCount: 1000,
            Revenue: 2000000,
        },
        {
            id: 72,
            CountryCode: 'US',
            Change: 0.4,
            Net: -2.13,
            Rating: 'Buy',
            NetIncome: 200000,
            Sector: 'Retail',
            EmployeeCount: 2000,
            Revenue: 3000000,
        },
        {
            id: 73,
            CountryCode: 'UK',
            Change: 0.6,
            Net: -15.2,
            Rating: 'Buy',
            NetIncome: 300000,
            Sector: 'Manufacturing',
            EmployeeCount: 3000,
            Revenue: 4000000,
        },
        {
            id: 74,
            CountryCode: 'JP',
            Change: 0.8,
            Net: 30.5,
            Rating: 'Buy',
            NetIncome: 400000,
            Sector: 'Finance',
            EmployeeCount: 4000,
            Revenue: 5000000,
        },
        {
            id: 75,
            CountryCode: 'DE',
            Change: -0.2,
            Net: 0.5,
            Rating: 'Sell',
            NetIncome: 500000,
            Sector: 'Healthcare',
            EmployeeCount: 5000,
            Revenue: 6000000,
        },
        {
            id: 76,
            CountryCode: 'CN',
            Change: 0.4,
            Net: -0.3,
            Rating: 'Buy',
            NetIncome: 600000,
            Sector: 'Energy',
            EmployeeCount: 6000,
            Revenue: 7000000,
        },
        {
            id: 77,
            CountryCode: 'FR',
            Change: 0.6,
            Net: 1.8,
            Rating: 'Buy',
            NetIncome: 700000,
            Sector: 'Telecom',
            EmployeeCount: 7000,
            Revenue: 8000000,
        },
        {
            id: 78,
            CountryCode: 'CH',
            Change: 0.8,
            Net: 19.5,
            Rating: 'Buy',
            NetIncome: 800000,
            Sector: 'Transportation',
            EmployeeCount: 8000,
            Revenue: 9000000,
        },
        {
            id: 79,
            CountryCode: 'CA',
            Change: -0.2,
            Net: -20.4,
            Rating: 'Sell',
            NetIncome: 900000,
            Sector: 'Real Estate',
            EmployeeCount: 9000,
            Revenue: 10000000,
        },
        {
            id: 80,
            CountryCode: 'AU',
            Change: 0.4,
            Net: 0.2,
            Rating: 'Buy',
            NetIncome: 1000000,
            Sector: 'Consumer Goods',
            EmployeeCount: 10000,
            Revenue: 11000000,
        },
        {
            id: 81,
            CountryCode: 'US',
            Change: -0.02,
            Net: 4.5,
            Rating: 'Sell',
            NetIncome: 50000,
            Sector: 'Technology',
            EmployeeCount: 1000,
            Revenue: 1000000,
        },
        {
            id: 82,
            CountryCode: 'UK',
            Change: 0.03,
            Net: 3.2,
            Rating: 'Buy',
            NetIncome: 40000,
            Sector: 'Finance',
            EmployeeCount: 500,
            Revenue: 500000,
        },
        {
            id: 83,
            CountryCode: 'JP',
            Change: 0.01,
            Net: 2.1,
            Rating: 'Buy',
            NetIncome: 30000,
            Sector: 'Retail',
            EmployeeCount: 200,
            Revenue: 200000,
        },
        {
            id: 84,
            CountryCode: 'DE',
            Change: -0.04,
            Net: 5.6,
            Rating: 'Sell',
            NetIncome: 60000,
            Sector: 'Manufacturing',
            EmployeeCount: 1500,
            Revenue: 1500000,
        },
        {
            id: 85,
            CountryCode: 'FR',
            Change: 0.06,
            Net: 1.7,
            Rating: 'Buy',
            NetIncome: 25000,
            Sector: 'Transportation',
            EmployeeCount: 300,
            Revenue: 300000,
        },
        {
            id: 86,
            CountryCode: 'IT',
            Change: 0.02,
            Net: 4.3,
            Rating: 'Buy',
            NetIncome: 35000,
            Sector: 'Energy',
            EmployeeCount: 400,
            Revenue: 400000,
        },
        {
            id: 87,
            CountryCode: 'ES',
            Change: -0.05,
            Net: 3.4,
            Rating: 'Sell',
            NetIncome: 45000,
            Sector: 'Telecommunications',
            EmployeeCount: 600,
            Revenue: 600000,
        },
        {
            id: 88,
            CountryCode: 'CA',
            Change: 0.07,
            Net: 2.5,
            Rating: 'Buy',
            NetIncome: 20000,
            Sector: 'Healthcare',
            EmployeeCount: 100,
            Revenue: 100000,
        },
        {
            id: 89,
            CountryCode: 'AU',
            Change: 0.03,
            Net: 1.6,
            Rating: 'Buy',
            NetIncome: 30000,
            Sector: 'Media',
            EmployeeCount: 200,
            Revenue: 200000,
        },
        {
            id: 90,
            CountryCode: 'CH',
            Change: -0.02,
            Net: 5.7,
            Rating: 'Sell',
            NetIncome: 55000,
            Sector: 'Banking',
            EmployeeCount: 700,
            Revenue: 700000,
        },
        {
            id: 91,
            CountryCode: 'IN',
            Change: -2.43,
            Net: 81.11,
            Rating: 'Sell',
            NetIncome: 572000,
            Sector: 'Retail',
            EmployeeCount: 6220,
            Revenue: 2820000,
        },
        {
            id: 92,
            CountryCode: 'DE',
            Change: 6.38,
            Net: 40.12,
            Rating: 'Buy',
            NetIncome: 417000,
            Sector: 'Technology',
            EmployeeCount: 5100,
            Revenue: 1870000,
        },
        {
            id: 93,
            CountryCode: 'UK',
            Change: -4.87,
            Net: 76.32,
            Rating: 'Sell',
            NetIncome: 658000,
            Sector: 'Sports',
            EmployeeCount: 7990,
            Revenue: 2560000,
        },
        {
            id: 94,
            CountryCode: 'ES',
            Change: 2.15,
            Net: 54.72,
            Rating: 'Buy',
            NetIncome: 433000,
            Sector: 'Energy',
            EmployeeCount: 4510,
            Revenue: 1530000,
        },
        {
            id: 95,
            CountryCode: 'CA',
            Change: 7.44,
            Net: 48.09,
            Rating: 'Buy',
            NetIncome: 576000,
            Sector: 'Industrial',
            EmployeeCount: 7020,
            Revenue: 2010000,
        },
        {
            id: 96,
            CountryCode: 'AU',
            Change: -9.18,
            Net: 75.11,
            Rating: 'Sell',
            NetIncome: 371000,
            Sector: 'Mining',
            EmployeeCount: 5220,
            Revenue: 1670000,
        },
        {
            id: 97,
            CountryCode: 'CH',
            Change: 4.94,
            Net: 67.32,
            Rating: 'Buy',
            NetIncome: 681000,
            Sector: 'Automotive',
            EmployeeCount: 7500,
            Revenue: 2420000,
        },
        {
            id: 98,
            CountryCode: 'US',
            change: -0.04,
            Net: -27.2,
            Rating: 'Sell',
            NetIncome: 120000,
            Sector: 'Technology',
            EmployeeCount: 1000,
            Revenue: 240000,
        },
        {
            id: 99,
            CountryCode: 'UK',
            change: 0.12,
            Net: 20.2,
            Rating: 'Buy',
            NetIncome: 280000,
            Sector: 'Finance',
            EmployeeCount: 2000,
            Revenue: 560000,
        },
        {
            id: 100,
            CountryCode: 'JP',
            change: 0.02,
            Net: 10.9,
            Rating: 'Buy',
            NetIncome: 320000,
            Sector: 'Retail',
            EmployeeCount: 3000,
            Revenue: 640000,
        }
    ];
    var feedDelayInput = new ej.inputs.NumericTextBox({
        value: 1000,
        format: 'N0',
        min: 10,
        max: 5000,
        step: 1,
        width: "150px",
        floatLabelType: "Auto"
    }, '#feeddelay');
    var updateButton = new ej.buttons.Button({}, '#update');
    var clearButton = new ej.buttons.Button({ disabled: true }, '#clear');
    var grid = new ej.grids.Grid({
        dataSource: getTradeData,
        enableVirtualization: true,
        enableVirtualMaskRow: false,
        allowSelection: false,
        queryCellInfo: queryCellInfo,
        rowHeight: 38,
        height: 500,
        enableHover: false,
        columns: [
            {
                field: 'id',
                headerText: 'ID',
                width: '140',
                isPrimaryKey: true,
                visible: false
            },
            {
                field: 'CountryCode',
                headerText: 'Ticker',
                width: '70'
            },
            {
                field: 'Change',
                headerText: 'Change % 1D',
                width: '100',
                format: 'N0',
                textAlign: 'Right'
            },
            {
                field: 'Net',
                headerText: 'Net',
                width: '100',
                format: 'C2',
                type: 'number',
                textAlign: 'Right'
            },
            { field: 'Rating', width: '150', headerText: 'Technical Rating 1D' },
            {
                field: 'NetIncome',
                headerText: 'Net Income',
                width: '150',
                format: 'C2',
                type: 'number',
                textAlign: 'Right'
            },
            { field: 'Sector', width: '160', headerText: 'Sector' },
            {
                field: 'EmployeeCount',
                width: '130',
                headerText: 'Employee Count',
                textAlign: 'Right',
                template: '#empCountTemplate'
            },
        ],
    });
    grid.appendTo('#Grid');
    var initial = true;
    grid.on(ej.grids.dataReady, function () {
        if (initial) {
            updateButton.element.click();
            initial = false;
            feedDelayInput.element.addEventListener('keypress', function (e) {
                if (e && e.key === 'Enter' && feedDelayInput.element.parentElement.classList.contains('e-input-focus')) {
                    feedDelayInput.value = parseInt(feedDelayInput.element.value);
                    feedDelayInput.focusOut();
                    updateButton.element.click();
                }
            });
        }
    });
    grid.on(ej.grids.destroy, function () {
        clearButton.element.click();
    });
    var isDataBound = true;
    function queryCellInfo(args) {
        if (args.column.field === 'NetIncome') {
            if (args.data.Net < 0) {
                args.cell.classList.remove('e-increase');
                args.cell.classList.add('e-decrease');
            } else if (args.data.Net > 0) {
                args.cell.classList.remove('e-decrease');
                args.cell.classList.add('e-increase');
            }
        } else if (args.column.field === 'Change') {
            if (args.data.Change < 0) {
                updateCellDetails(args.cell, 'below-0');
            } else {
                updateCellDetails(args.cell, 'above-0');
            }
        } else if (args.column.field === 'Net') {
            if (args.data.Net < 0) {
                updateCellDetails(args.cell, 'below-0');
            } else {
                updateCellDetails(args.cell, 'above-0');
            }
        } else if (isDataBound) {
            if (args.column.field === 'Rating') {
                args.cell.innerHTML = '';
                var span = document.createElement('span');
                var span2 = document.createElement('span');
                if (args.data.Change === 0) {
                    customizeRatingCell(span, span2, ['e-icons', 'e-intermediate-state-2', 'neutral', 'ic', 'side-space'], 'neutral', 'Neutral');
                } else if (args.data.Change < -2 && args.data.Net < 0) {
                    customizeRatingCell(span, span2, ['e-icons', 'e-negc', 'e-chevron-down-double', 'below-0', 'ic', 'side-space'], 'below-0', 'Strongly Sell');
                } else if (args.data.Net < 0) {
                    customizeRatingCell(span, span2, ['e-icons', 'e-negc', 'e-chevron-down', 'below-0', 'ic', 'side-space'], 'below-0', 'Sell');
                } else if (args.data.Change > 5 && args.data.Net > 10) {
                    customizeRatingCell(span, span2, ['e-icons', 'e-posc', 'e-chevron-up-double', 'above-0', 'ic', 'side-space'], 'above-0', 'Strongly Buy');
                } else {
                    customizeRatingCell(span, span2, ['e-icons', 'e-posc', 'e-chevron-up', 'above-0', 'ic', 'side-space'], 'above-0', 'Buy');
                }
                args.cell.appendChild(span);
                args.cell.appendChild(span2);
            }
        }
        isDataBound = true;
    }
    function customizeRatingCell(span1, span2, span1_class, span2_class, span2_text) {
        for (var i = 0; i < span1_class.length; i ++) {
            span1.classList.add(span1_class[i]);
        }
        span2.classList.add(span2_class);
        span2.innerText = span2_text;
    }
    function updateCellDetails(cell, className) {
        var div = document.createElement('div');
        var span1 = document.createElement('span');
        span1.classList.add('rowcell-left');
        div.classList.add(className);
        span1.innerHTML = cell.innerHTML;
        cell.innerHTML = '';
        div.appendChild(span1);
        cell.appendChild(div);
    }
    var timerID;
    updateButton.element.onclick = function () {
        if (!timerID) {
            updateButton.disabled = true;
            feedDelayInput.enabled = false;
            clearButton.disabled = false;
            timerID = setInterval(
                updateCellValues,
                parseInt(feedDelayInput.value)
            );
        }
    };
    clearButton.element.onclick = function () {
        if (timerID) {
            updateButton.disabled = false;
            feedDelayInput.enabled = true;
            clearButton.disabled = true;
            clearInterval(timerID);
            timerID = undefined;
        }
    };
    function updateCellValues() {
        var oldValue;
        var newValue;
        for (var i = 0; i < grid.currentViewData.length; i++) {
            if (grid.currentViewData[i] === undefined) {
                return;
            }
            var num = Math.floor(Math.random() * 99) + 1;
            num *= Math.floor(Math.random() * 2) === 1 ? 1 : -1;
            oldValue = grid.currentViewData[i].Net;
            if (i % 2 === 0) {
                num = num * 0.25;
            } else if (i % 3 === 0) {
                num = num * 0.83;
            } else if (i % 5 === 0) {
                num = num * 0.79;
            } else if (i % 4 === 0) {
                num = num * 0.42;
            } else {
                num = num * 0.51;
            }
            isDataBound = true;
            grid.setCellValue(
                grid.currentViewData[i].id,
                'Net',
                parseFloat(num.toFixed(2))
            );
            isDataBound = true;
            newValue = parseFloat(
                (grid.currentViewData[i].Net - oldValue).toString().substring(0, 2)
            );
            grid.setCellValue(
                grid.currentViewData[i].id,
                'Change',
                parseFloat(newValue.toFixed(2))
            );
            isDataBound = true;
            var ratingValue = grid.currentViewData[i].Net < 0 ? 'Sell' : 'Buy';
            grid.setCellValue(grid.currentViewData[i].id, 'Rating', ratingValue);
            var val = num + newValue;
            grid.setCellValue(grid.currentViewData[i].id, 'NetIncome', val);
        }
    }
};
