interface Product {
    id: string;
    in_stock: boolean;
    on_sale: boolean;
    price: string;      // Format: "$XX.XX"
    color: string;
    categories: string[];
}

// Finds products that are out of stock, not on sale, and under $20
export function getOutOfStockNotOnSaleUnder20(products: Product[]): Product[] {
    return products.filter(product => {
        const price = parseFloat(product.price.replace('$', ''));
        return !product.in_stock && !product.on_sale && price < 20;
    });
}

// Returns the most frequently occurring category across all products
export function getMostCommonCategory(products: Product[]): string {
    const categoryCount = products.reduce((acc, product) => {
        product.categories.forEach(category => {
            acc[category] = (acc[category] || 0) + 1;
        });
        return acc;
    }, {} as Record<string, number>);

    return Object.entries(categoryCount)
        .sort(([, a], [, b]) => b - a)[0][0];
}

// Calculates the average price of items marked as on sale
export function getAverageSalePrice(products: Product[]): number {
    const saleItems = products.filter(product => product.on_sale);
    const totalPrice = saleItems.reduce((sum, product) => {
        return sum + parseFloat(product.price.replace('$', ''));
    }, 0);
    
    return totalPrice / saleItems.length;
}

// Groups and counts out-of-stock products by color
export function getOutOfStockByColor(products: Product[]): Record<string, number> {
    return products
        .filter(product => !product.in_stock)
        .reduce((acc, product) => {
            acc[product.color] = (acc[product.color] || 0) + 1;
            return acc;
        }, {} as Record<string, number>);
}