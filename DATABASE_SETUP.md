# Supabase Database Setup

To set up the database for your Door and Window Business website, please follow these steps:

1. Create a free account on [Supabase](https://supabase.com/).
2. Create a new project.
3. Once the project is created, go to the **SQL Editor** in the Supabase Dashboard.
4. Copy and paste the following SQL script into the editor and click **Run**.

```sql
-- Create Products Table
CREATE TABLE products (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    sku VARCHAR(100) UNIQUE NOT NULL,
    type VARCHAR(50) NOT NULL CHECK (type IN ('door', 'window')),
    category VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    discount_price DECIMAL(10, 2),
    stock_quantity INTEGER DEFAULT 0,
    description TEXT,
    material VARCHAR(100),
    color VARCHAR(100),
    
    -- Dimensions
    width VARCHAR(50),
    height VARCHAR(50),
    thickness VARCHAR(50), -- specifically for doors
    weight VARCHAR(50),
    
    -- Window specific
    glass_type VARCHAR(100),
    
    -- Common specs
    finish VARCHAR(100),
    water_resistant BOOLEAN DEFAULT false,
    warranty VARCHAR(100),
    room_suitability TEXT[], -- Array of rooms like ['Bedroom', 'Bathroom']
    
    -- Media (Storing URLs)
    images TEXT[],
    video_url TEXT,
    
    -- Metadata
    is_featured BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create Inquiries Table
CREATE TABLE inquiries (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    city VARCHAR(100) NOT NULL,
    product_name VARCHAR(255),
    quantity INTEGER DEFAULT 1,
    message TEXT,
    status VARCHAR(50) DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'resolved', 'closed')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create Categories Table (Optional for dynamic categories)
CREATE TABLE categories (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    type VARCHAR(50) CHECK (type IN ('door', 'window')),
    image_url TEXT
);

-- Enable Row Level Security (RLS)
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;

-- Create Policies for Products (Public read, Authenticated write)
CREATE POLICY "Public profiles are viewable by everyone."
ON products FOR SELECT USING (true);

-- Create Policies for Categories
CREATE POLICY "Categories are viewable by everyone."
ON categories FOR SELECT USING (true);

-- Create Policies for Inquiries (Public insert, Authenticated read/write)
CREATE POLICY "Anyone can insert inquiries."
ON inquiries FOR INSERT WITH CHECK (true);
```

5. **Connecting to Next.js**:
   Go to your Supabase Project Settings -> API.
   Copy your `Project URL` and `anon public` key.
   Create a `.env.local` file in the root of your Next.js project and add:

   ```env
   NEXT_PUBLIC_SUPABASE_URL=your-project-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```
